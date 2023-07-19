// Function will only work when the array is sorted

const sumzero = (Array)=>{
    let left = 0;
    let right = Array.length-1;
    while( left < right ){
        let sum = Array[left]+Array[right];
        if(sum===0){
            return [Array[left], Array[right]];
        }
        else if(sum > 0){
            right--;
        }
        else{
            left++;
        }
    }
}

//Function or Logic for unsorted array

function FindPair(arr){
    let pair = {};
    for(let i=0; i< arr.length; i++){
        let x = -arr[i];
        if(pair[x]){
          // if x is present in pair map
          return [x, arr[i]];
        }
        pair[arr[i]] = 1;
        console.log(pair);
    }
    
    return [];
  }

const result = FindPair([-5,-3,-2,0,2,4,6,8,-4]);
console.log(result);