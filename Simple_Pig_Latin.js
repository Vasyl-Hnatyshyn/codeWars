function pigIt(str){
  let arr = str.split(" ");
  let newArr = [];
  for(let i = 0; i<arr.length; i++){
    if(arr[i].substring(0,1) == "!"){
    newArr.push("!");
    }else if(arr[i].substring(0,1) == "?"){
    newArr.push("?");
    }else{
    let lastLetterAdded = arr[i].substring(1) + arr[i].substring(0,1) + "ay";
    newArr.push(lastLetterAdded);
  }
  }
  
  return newArr.toString().replace( /,/g , ' ');
}
