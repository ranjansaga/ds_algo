var arr = [2, 6, 4, 7];

var getSumOfTwoNumbers = (arr, result) => {
  var hashMap = {};
  for (var i = 0; i < arr.length; i++) {
    var targetVal = result - arr[i]; // 9-2 = 7
    if (hashMap.hasOwnProperty(arr[i])) {
      console.log('inside', targetVal, arr[i]);
    }
    hashMap[targetVal] = i;
  }
  console.log('hash', hashMap);
};

getSumOfTwoNumbers(arr, 9);
