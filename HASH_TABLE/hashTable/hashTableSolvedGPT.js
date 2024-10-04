// class Node {
//     constructor(key, value) {
//       this.key = key;    
//       this.value = value;  
//       this.next = null;  
//     }
//   }
  
//   class LinkedList {
//     constructor() {
//       this.head = null; 
      
//     }
  
//     append(key, value) {
//       const node = new Node(key, value);
//       if (!this.head) {
//         this.head = node;
//         return;
//       }
  
//       let current = this.head;
//       while (current.next) {
//           current = current.next;
//         }
        
//         // If key not found, append the new node
//         current.next = node;
//     }

    
    
//     // Update the value if the key is found
//     // if (current.key === key) {
//     //   current.value = value;
//     //   return;
//     // }
//     // if (!current.next) break;



//     // Find the value by key
//     get(key) {
//       let current = this.head;
//       while (current) {
//         if (current.key === key) return current.value;
//         current = current.next;
//       }
//       return null;  // Return null if the key is not found
//     }
  
//     // Print the linked list
//     print() {
//       let arr = [];
//       let current = this.head;
//       if (!this.head) return "empty";
//       while (current) {
//         arr.push({ key: current.key, value: current.value });
//         current = current.next;
//       }
//       return arr;
//     }
//   }
  
//   class HashTable {
//     constructor(size) {
//       this.table = new Array(size);
//       this.size = size;
//     }
  
//     // Hash function to compute the index
//     hash(key) {
//       let hash = 0;
//       for (let i = 0; i < key.length; i++) {
//         hash += key.charCodeAt(i);
//       }
//       return hash % this.size;
//     }
  
//     // Insert or update key-value pairs
//     insert(key, value) {
//       const bucket = this.hash(key);
//       if (!this.table[bucket]) {
//         this.table[bucket] = new LinkedList();
//       }
//       // Use append() to add or update the value
//       this.table[bucket].append(key, value);
//     }
  
//     // Retrieve a value by key
//     get(key) {
//       const bucket = this.hash(key);
//       if (this.table[bucket]) {
//         return this.table[bucket].get(key);  // Use get() from LinkedList
//       }
//       return undefined;
//     }
  
//     // Display the hash table
//     display() {
//       for (let i = 0; i < this.table.length; i++) {
//         if (this.table[i]) {
//           console.log(`Bucket ${i}:`, this.table[i].print());
//         }
//       }
//     }
//   }
  
//   // Example usage:
//   const hashTable = new HashTable(10);
//   hashTable.insert("name", "John");
//   hashTable.insert("name", "Adnan");

//   hashTable.insert("age", 30);
//   hashTable.insert("occupation", "developer");
//   hashTable.insert("city", "New York");
  
// //   console.log("Get 'name':", hashTable.get("name"));  // John
// //   console.log("Get 'age':", hashTable.get("age"));  // 30
// //   console.log("Get 'occupation':", hashTable.get("occupation"));  // developer
  
//   hashTable.display();
  