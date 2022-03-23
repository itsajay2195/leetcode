//1
function minValue(arr){
  const sumWithInitial = arr.reduce(
    (previousValue, currentValue) => currentValue < previousValue ? currentValue : previousValue
  );
  
  console.log(sumWithInitial);
}

// minValue([50,100,200,4,500]);

//possible cases : 


function minFor(arr){
  let initialValue = arr[0] //1 
  for (i=1;i<arr.length;i++){//n
      if(arr[i]<initialValue){
          initialValue = arr[i]
      }
  }
  console.log(initialValue)
}

//bestcase: [1,2,3,4,5]
//worstcase: [5,4,3,2,1]
//averagecase: [2,1,3]

minValue([5]);// possible case : only one element in the array O(n)
// minFor([50,100,200,4,500]);(O(n))
// worst cae: more number of element s in an array O(n)

// const  isEven = (n) => n % 2 === 0 //O(1)

// console.log(isEven(211));