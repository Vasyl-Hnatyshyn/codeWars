function nbDig(n, d) {
  let squareArr = [];
  for(let i = 0; i <=n; i++){
    squareArr.push(i*i);
  }
  return squareArr.toString().replace(/,/g,"").split("").filter((v)=> v == d).length
}
