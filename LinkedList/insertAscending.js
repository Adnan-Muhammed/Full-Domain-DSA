insert=(value)=>{
    let node = new Node(value)

    if(!this.head){
        this.head = node;
        return;
    }




    if(this.head.value>=value){
        node.next =this.head
        this.head= node;
        return;
    }
    
    let current = this.head;
    while(current.next && current.next.value<value){
        current =current.next
    }
    node.next =current.next;
    current.next = node
  }


