//Basic Approach

const sumzero = (Array)=>{
    for(let i=0; i<Array.length; i++){
        for(let j=0; j<Array.length; j++){
            if(Array[i]+Array[j]===0){
                return [Array[i],Array[j]];
            }
        }
    }
}

const result = sumzero([-5,-4,-3,-2,0,2,4,6,8]);
console.log(result);