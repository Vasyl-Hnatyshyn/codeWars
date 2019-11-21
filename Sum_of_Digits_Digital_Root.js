function digital_root(n) {
  while(n>10){ 
    n = n.toString().split("").map(Number).reduce((t,v)=> t += v)
  }
  return n
}
