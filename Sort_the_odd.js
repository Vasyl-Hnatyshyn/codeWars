function sortArray(array) {
   let newArr = [];
   let j = 0;
   for(let i = 0;i < array.length;i++){
    if(array[i] % 2 == 0){
     newArr[i] = array[i]
    }else {     
     newArr[i] = array.filter(function(x){return x % 2 != 0}).sort(function(a, b){return a-b})[j];
     j++;
    }
   }
   return newArr
}
