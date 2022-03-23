function dups(arr){
    //[1,4,2,4,4]
   var result = []
   for(var i=0;i<arr.length;i++){
     var value = Math.abs(arr[i])
     var index = value -1;
     if(arr[index] < 0){
         result.push(value)
         console.log('the arr of if',arr)
     }else{
        arr[index] *= -1;
        console.log('the arr of wlse is',arr)
     }
   }

   return result;
}



dups([4,3,2,7,8,2,3,1])