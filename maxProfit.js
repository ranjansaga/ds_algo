function maxProfit(arr) {
  let min = arr[0] || 0
  let profit = 0
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] < min) {
      min = arr[j]
    }
    if(arr[j] - min > profit) {
    	profit = arr[j] -min
    }
  }
  return profit
}

console.log(maxProfit([7, 1, 25, 3, 15, 4]))
