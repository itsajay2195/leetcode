function quickSort(arr){
    const copiedArray = [...arr];
    if(copiedArray.length <= 1){
        return copiedArray;
    }
    let pivotalElement = copiedArray.shift();
    let biggerElementsArray = [];
    let smallerElementsArray=[]
    let centerElementsArray = [pivotalElement]

    while (copiedArray.length){
        let currentElement = copiedArray.shift(); // we are taking this element to compare it with the pivotal element
        if (currentElement< pivotalElement){
            smallerElementsArray.push(currentElement);
        }
        else if(currentElement > pivotalElement){
            biggerElementsArray.push(currentElement);
        }
        else{
            centerElementsArray.push(currentElement);
        }

     

       
    }
    const sortedBiggerElementsArray = quickSort(biggerElementsArray);
    const sortedSmallerElementsArray = quickSort(smallerElementsArray);
    return smallerElementsArray.concat(centerElementsArray, sortedBiggerElementsArray);
}

console.log(quickSort([-3,10,1,100,-3,-10,22,15]))