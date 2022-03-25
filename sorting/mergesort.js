let arr = [1,4,10,3,15]

function mergeSort(arr){
    console.log("FUNCTION START")
    console.log(arr)
    if(arr.length<2) return arr
    
    if(arr.length ===2 ){
        console.log('EXACTLY 2 ITEMS')
        console.log(arr[0] > arr[1] ? [arr[1],arr[0]] : arr)
        return arr[0] > arr[1] ? [arr[1],arr[0]] : arr
    }


    let middleIndex = Math.floor(arr.length/2)
    let leftArray = arr.slice(0,middleIndex)// [1,4] 2. [10]
    let rightArray = arr.slice(middleIndex)  // [10,3,15] 2. [3,15]

    let leftSortedArray = mergeSort(leftArray) //[1,4] o/p
    let rightSortedArray = mergeSort (rightArray) //[10,3,15] i/p

    console.log('AFTER RECURSIVE STEP')
    console.log(leftSortedArray)
    console.log(rightSortedArray)


    let mergedArr=[]
    let leftArrayIndex =0;
    let rightArrayIndex =0;

    while(leftArrayIndex < leftSortedArray.length || rightArrayIndex < rightSortedArray.length ){
        console.log('LEFT ARRAY INDEX')
        console.log(leftArrayIndex)
        console.log('RIGHT ARRAY INDEX')
        console.log(rightArrayIndex)


    // we want to add elements to the array, the merged array with new items in the correct order
        if(leftArrayIndex >= leftSortedArray.length || leftSortedArray[leftArrayIndex] > rightSortedArray[rightArrayIndex]){
            console.log('INSIDE IF')
            mergedArr.push( rightSortedArray[rightArrayIndex])
            rightArrayIndex++;
            console.log('THE MERGED ARRAY IS ')
            console.log(mergedArr)
        }else{
            console.log('Inside ELSE')
            mergedArr.push( leftSortedArray[leftArrayIndex])
            leftArrayIndex++;
            console.log('THE MERGED ARRAY IS ')
            console.log(mergedArr)
        }


    }

    console.log('AFTER MERGE')
    console.log(mergedArr)

    return mergedArr.map(num => num*num)

}

// let sortedArray =mergeSort([-10,33,5,10,9,3,-19,-99,100])
let sortedArray =mergeSort([-10,33,100,5])
console.log(sortedArray)




//[1,4,10,3,15]  /2 =2.5 =

//[1,4] [10,3,15] 

//[1,4] [10] [3,15]

