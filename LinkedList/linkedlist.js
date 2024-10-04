class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.next = null;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  print() {
    let arr = [];
    let current = this.head;
    if (!this.head) return console.log("its empty");
    while (current) {
      // console.log(current.value);
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }

  preppend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  search(value) {
    let index = 0;
    if (!this.head) {
      console.log("search value is not included here");
      return;
    }
    let current = this.head;
    while (current) {
      index++;
      if (current.value === value) {
        return [true, `${index}'th index`];
      }
      current = current.next;
    }
    return false;
  }

  delete(value) {
    if (!this.head) {
      return;
    }
    while (this.head.value === value) {
      this.head = this.head.next;
      // return
    }
    let current = this.head;
    while (current.next) {
      if (current.next.value == value) {
        current.next = current.next.next;
        // return
      } else {
        current = current.next;
      }
    }
  }

  findMaxMinValues() {
    let arr = [];
    if (!this.head) {
      return "its empty";
    }

    let minValue = this.head.value;
    let maxValue = this.head.value;
    let current = this.head;

    while (current) {
      // min Value
      if (current.value < minValue) {
        minValue = current.value;
      }

      // max value
      if (current.value > minValue) {
        maxValue = current.value;
      }

      current = current.next;
    }
    return { minValue, maxValue };
    return minValue;
  }

  findMid() {
    if (!this.head) {
      return "List is empty!";
    }

    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow.value;
  }

  findMidElem() {
    if (!this.head) {
      return "its empty";
    }
    let slow = this.head;
    let fast = this.head;
    let previous = slow;

    while (fast !== null && fast.next !== null) {
      previous = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    if (fast === null) {
      return { firstEnd: previous.value, secondStart: slow.value };
    } else {
      return slow.value;
    }
  }
}

let list = new LinkedList();

list.append(4);
list.append(-3);
list.append(4); //
list.append(2);
list.append(3); //
list.append(1);
list.append(5); //
list.append(4);
list.append("90"); //
list.append(0);
list.append(3); //
list.append(-1);
list.append(6); //
list.append(8);

let res = list.print();
console.log(res);

// list.search(30)

// let searchValue =  list.search(10)
// console.log(searchValue);

// list.delete(4)

// let afterDelete = list.print();
// console.log(afterDelete);

// let valuesMinMax = list.findMaxMinValues()
// console.log(valuesMinMax);

// let  midElem =  list.findMid()

// console.log(midElem);

let midEleme2 = list.findMidElem();
console.log(midEleme2);
