function order(words){
  return (words.length > 0) ? words.split(' ').map(v => v.match(/[1-9]/g) + v).sort().map(v=>v.slice(1)).join(' ') : "";
}
