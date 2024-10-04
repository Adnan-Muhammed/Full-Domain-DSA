class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }

    hash(key){
        
        let hash = 0;
        for(let i= 0;i<key.length;i++){
            hash+= key.charCodeAt(i);
        }
        
        return hash % this.size;
    }

    setValue(key,value){
        let bucket = this.hash(key)
        this.table[bucket] = value;
    }

    display(){
        for(let i = 0; i<this.size;i++){
            console.log(i,this.table[i]);
        }
    }
}

const HashTableObj = new HashTable(10)

HashTableObj.setValue(10,"Adnan")
HashTableObj.setValue(10,"Asif")
HashTableObj.setValue(10,"Amal")   // collied
HashTableObj.display()