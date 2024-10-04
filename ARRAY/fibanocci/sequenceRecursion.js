


let fibannocci=(n)=>{
  if(n<=1) return n;
  return fibannocci(n-1)+fibannocci(n-2)
}


let sequenceFebannocci = (n)=>{
  let sequence=[];

  for(let i=0;i<n;i++){
    sequence.push(fibannocci(i))
  }
  return sequence
}

let res= sequenceFebannocci(2)
console.log(res);
