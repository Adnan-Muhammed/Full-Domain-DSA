class Node{
    constructor(key,value){
        this.key = key
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    append(key,value){
        const node = new Node(key,value)
        if(!this.head){
            this.head = node;
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next =node;
    }

    display(){
        let listValues =[];
        let current = this.head;
        while(current){
            listValues.push([{currentKey:current.key,currentValue: current.value}])
            current =current.next
        }
        return listValues
    }
}



const list = new LinkedList();

list.append("name","Adnan")
list.append("name","Nischal")

console.log(list.display());

