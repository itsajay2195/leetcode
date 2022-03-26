function reversal(word){
    let result = ""
    for(let i= word.length-1;i>=0;i--){
  
        result += word[i]
    }
    console.log(result)
   
}

reversal("Ajay")