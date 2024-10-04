class HashTable {
    constructor(size){
        this.table = new Array(size);
        this.size = size
    }

    hash(key){
        let hash = 0;
        for(let i=0;i<key.length;i++){
            hash+=key.charCodeAt(i)
        }
        return hash % this.size;
    }

    setValue(key, value){
        let bucket = this.hash(key);
        this.table[bucket] = value;
    }
    display(){
        for(let i=0;i<this.size;i++){
            if(this.table[i]){
                console.log(i, this.table[i]);
            }
        }
    }
}

const HashTableObj = new HashTable(10);

HashTableObj.setValue("name","Adnan");
HashTableObj.setValue("age","28");
HashTableObj.setValue("place","Tvm");  // place collied name
HashTableObj.display()