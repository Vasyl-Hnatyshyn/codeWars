function updateInventory(curStock, newStock) {
  curStock = curStock.reduce(function(a,b) {return a.concat(b)});
  var updated = [];	
  for (var i = 0; i < newStock.length; i++) {
    var stock = curStock.indexOf(newStock[i][1]);
    if (stock > -1) {
      curStock[stock -1] += newStock[i][0];
    } else {
      updated.push(newStock[i]);
    }
  } 
  for (var j = 0; j < curStock.length; j+= 2) {
    updated.push([curStock[j], curStock[j+1]]);
  }
  return updated.sort(function(a,b) {
    if (a[1] > b[1]) {
      return 1;
    }
  });
}
