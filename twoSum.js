function twoSum(arr,target){
    //[1,5,9] target=10
    var map ={}
    for (i=0;i<arr.length;i++){
        let value = arr[i] // 1. value = 1 ,  2. value = 5 , 3. value =9
        let complement_pair = target - value; // 1. complement_pair = 9 , 2.complement_pair = 5 (10-5), 3.complement_pair= 1 (10-9)
        if(map[complement_pair] !== undefined){ // 1. 9 is not in the map, so the condition will fail nd enters the else , 2. 5 is not in the map, so enters else , 1 is int he map so it entes the if
            return [map[complement_pair],i]
        }else{ //1. map = {1:0} , 2. map ={1:0, 5:1}
            map[value] = i
        }
    }
}

console.log(twoSum([1,5,9],10))