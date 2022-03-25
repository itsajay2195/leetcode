function permutationRepetition(options, length){
    const permutations = []

    if (length === 1){
        return options.map(option => [option])
    }

    const partialPermutations = permutationRepetition(options,length -1)
    //[[1],[2],[3]]

    for (const option of options){
        for(const partialPermutation of partialPermutations){
            permutations.push([option].concat(partialPermutation))
        }
    }

    return permutations;
}


const items =[1,2,3]
const resultLength = 3

console.log(permutationRepetition(items,resultLength))