let arr = [1, 1, 2, 1, 2, 3, 1, 4, 9, 4, 1, 4];

//////////////////////////////////////////////
let count={}
arr.forEach((elem)=>{
    count[elem]= (count[elem] || 0) +1
})

console.log(count);
//////////////////////////////////////////////



//////////////////////////////////////////////
let count2 ={}
for (let elem of arr){
    count2[elem] =(count2[elem]||0)+1
}

console.log(count2);
//////////////////////////////////////////////




/////////////////////////////////////////////
let count3 ={};
for(let elem of arr){
    if(count3[elem]){
        count3[elem]+=1;
    }else{
        count3[elem]=1
    }
}

console.log(count3);


/////////////////////////////////////////////////
let count4 ={}

for(let i=0;i<arr.length;i++){
    if(count4[arr[i]]){
        count4[arr[i]]+=1
    }else{
        count4[arr[i]]=1
    }
}

console.log(count4);
//////////////////////////////////////////////////