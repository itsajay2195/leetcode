function permute(arr, permutation = [],answers = []){

    if(arr.length === 0){
        answers.push([...permutation])
    }

    for(i=0; i< arr.length; i++){
        console.log('inside')
        permutation.push(arr[i]) // pushing the first element
        const choices = arr.filter((num,index)=> index !== i);// forms the new array which basically removes first index
        console.log('choices are',choices)
        permute(choices, permutation,answers)
        permutation.pop()
    }

    return answers;
}

console.log(permute(["walk the dog","clean the toilet","go to office"]))