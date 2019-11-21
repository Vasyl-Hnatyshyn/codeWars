function goodVsEvil(good, evil){
  let raceGood = [1,2,3,3,4,10];
  let raceEvil = [1,2,2,2,3,5,10];
  let arrGood = good.split(" ").map(v => +v);
  let arrEvil = evil.split(" ").map(v => +v);
  let powerGood = [];
  let powerEvil = [];
  for(let i = 0;i < arrGood.length;i++){
    powerGood[i] = arrGood[i] * raceGood[i]
  }
  for(let i = 0;i < arrEvil.length;i++){
    powerEvil[i] = arrEvil[i] * raceEvil[i]
  }
  let sumGood = powerGood.reduce((total, num) => total + num);
  let sumEvil = powerEvil.reduce((total, num) => total + num);

  if(sumGood > sumEvil){
    return "Battle Result: Good triumphs over Evil"
  }else if(sumGood < sumEvil){
    return "Battle Result: Evil eradicates all trace of Good"
  }else{
    return "Battle Result: No victor on this battle field"
  }
}
