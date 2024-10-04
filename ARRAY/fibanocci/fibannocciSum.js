let fibannocci=(n)=>{
    if(n<=1) return n;
    return fibannocci(n-1)+fibannocci(n-2)
  }
  
  
  let seq = (n)=>{
      let sequence =[]
      let sum =0;
    for(let i=0;i<n;i++){
     sequence.push(fibannocci(i))

     sum = sequence.reduce((acc,elem)=>elem+acc,0)

  }  
  return {sum,sequence}
  }
  
  let res = seq(5)

  console.log(res);
  
  