function getPermutation(options){
    const permutations =[]
    if(options.length === 1){
        return [options]
    }

    const partialPermuations = getPermutation( options.slice(1) );
    console.log(partialPermuations)

    const firstOption =options[0] // we will be basically combininig this first option with the peartialpermutation. This firstoption will be moved in front and back ofour nested value
    console.log('First option is ', firstOption)

    for (let i=0; i < partialPermuations.length; i++){ // we are basically trying to combine item in the partial permutation array with the other items of the options array taht are not in the partial permutaiton list
        const partialPermutation = partialPermuations[i] 
        console.log('inside outer for loop',partialPermutation)

        for (let j=0; j<=partialPermutation.length; j++ ){
            const permutationInFront = partialPermutation.slice(0,j)
            const permutationInBack = partialPermutation.slice(j)

            permutations.push(permutationInFront.concat([firstOption], permutationInBack))
        }
    }

    return permutations

}
const todoList=['walk the dog','clean the toilet','buy groceries','order food']
console.log(getPermutation(todoList))