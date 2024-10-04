class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head =null;
    }

    append(value){
        const node =new Node(value);
        if(!this.head){
            this.head= node;
            return ;
        }

        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = node;
    }


    merge(list){
        const node = list.head;
        if(!this.head){
            this.head =node;
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = node;
    }

    print(){
        let current =this.head;
        let arr = [];
        while(current){
            console.log(current.value);
            arr.push(current.value)
            current = current.next
        }
        return arr
    }


    nodeCount(){
        let count =0;
        if(!this.head){
            console.log('nothing');
            return
        }
        let current = this.head;
        while(current){
            count++
            current = current.next
        }
        return count;
    }
}

console.log('-=-=-=-=-=-=-=-=');
console.log('-=-=-=-=-=-=-=-=');

let list = new LinkedList;
list.append(2)
list.append(3)
list.append(1)
list.append(5)

list.print()

// let res = list.print()
// console.log(res);




console.log('-=-=-=-=-=-=-=-=');
let list2 = new LinkedList;
list2.append(-2)
list2.append(-1)
list2.append(-3)
list2.append(-8)

list2.print()
console.log('-=-=-=-=-=-=-=-=');
console.log('-=-=-=-=-=-=-=-=');


list.merge(list2)
// list.print()


let countOfNode = list.nodeCount()

console.log('list1 node count',countOfNode);
