function getAverage(marks){
  return Math.floor(marks.reduce((t,v)=>t+v)/marks.length)
}
