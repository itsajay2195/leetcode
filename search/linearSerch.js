

function searchAlgorithm(array,value,comporatorFn){
    let index = 0
    for(let item of array){
         //this is for onbjects
        if( typeof array === "object"
           && array !== null
           && comporatorFn(item,value)){
            return index
        }
       
        //this is for arrays
        if( item === element){
            return index
        }
        index++
    }

    return index
}

console.log(searchAlgorithm([{name:"a",value:0},{name:"b",value:1},{name:"e",value:2},{name:"c",value:3}],{name:"c"}, function(element,item){
    return element.name === item.name
} ))


