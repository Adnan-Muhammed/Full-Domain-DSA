while(current){
      index++;
      if(current.value === value  ){
        return [true,`${index}'th index`]
      }
      current = current.next
    }