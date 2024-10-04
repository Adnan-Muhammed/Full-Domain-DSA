class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(key, value) {
        const node = new Node(key, value);
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

    display() {
        let listValues = [];
        let current = this.head;
        while (current) {
            listValues.push({ currentKey: current.key, currentValue: current.value });
            current = current.next;
        }
        return listValues; // Return the list values
    }
}

class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    setValue(key, value) {
        let bucket = this.hash(key);
        if (!this.table[bucket]) {
            this.table[bucket] = new LinkedList();
        }
        this.table[bucket].append(key, value);
    }

    display() {
        let result = []; // Array to hold all the output
        for (let i = 0; i < this.size; i++) {
            if (this.table[i]) { // Check if the bucket exists
             console.log({"bucket": i}, {values: this.table[i].display()})
            }
        }
        return result; // Return the result array
    }
}

const HashTableObj = new HashTable(10);
HashTableObj.setValue("name", "Adnan");
HashTableObj.setValue("age", "27");

HashTableObj.setValue("name", "Nischal");
HashTableObj.setValue("age", "22");

// Display the hash table
HashTableObj.display()
