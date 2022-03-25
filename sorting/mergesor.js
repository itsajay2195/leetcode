function mergeSort(arr){
    //[10,1,-1,40]

    if (arr.length <2) return arr
  
    if (arr.length ===2){
        arr[0]>[arr[1]] ? [arr[1],arr[0]] : arr
    }

    let middleIndex = Math.floor(arr.length/2)
    let leftArray = arr.slice(0,middleIndex)
    let rightArray = arr.slice(middleIndex)


    let leftSortedArray = mergeSort(leftArray)
    let rightSortedArray = mergeSort(rightArray)

    let mergerArr=[]
    let leftIndex=0;
    let rightIndex = 0

    

        while (leftIndex < leftSortedArray.length || rightIndex  < rightSortedArray.length){

                if(leftIndex >= leftSortedArray.length || leftSortedArray[leftIndex] > rightSortedArray[rightIndex]){
                mergerArr.push(rightSortedArray[rightIndex])
                rightIndex++;
            }   else{
                mergerArr.push(leftSortedArray[leftIndex])
                leftIndex++;
            }
        }


    return mergerArr;

}



let sortedArray =mergeSort([-10,33,100,5])
console.log(sortedArray)