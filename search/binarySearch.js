function binarySearch(sortedArray,number){
    let startIndex = 0
    let endIndex = sortedArray.length - 1

    while (startIndex <= endIndex){
        const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2)
        if(number === sortedArray[middleIndex]){
            return middleIndex
        }

        if (sortedArray[middleIndex] < number){
            startIndex = middleIndex + 1
        }else{
            endIndex = middleIndex - 1
        }
        
    }
}

console.log(binarySearch([1,5,9,13,99,100],100))


// Time Complexity is
// best case: the number we are seaching is in the middle itself: O(1)
// worst case :  the number we are searching is the smallest or largest number in the array: O(log n)
// average case: the number we are searching is in the middle of the array: O(log n)
/// the tume complexity is O(log n) becasue we are basically cutting the array in half each time we check the middle index