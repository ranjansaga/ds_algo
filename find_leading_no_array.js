function leadingNumbers(input) {
  var result = [];
  for (var i = 0; i < input.length; i++) {
    var isLeadingNo = true;
    for (var j = i + 1; j < input.length; j++) {
      if (input[i] < input[j]) {
        isLeadingNo = false;
      }
    }
    if (isLeadingNo) {
      result.push(input[i]);
    }
  }
  console.log('reslt', result);
}

leadingNumbers([200, 20, 40, 100, 30]);

// output: [200,100,30]
// ---------------------optimized solution:------------

function leadingNumbers2(input) {
  var result = [];
  temp = 0;
  for (var i = input.length - 1; i >= 0; i--) {
    console.log('i', i, input[i], temp);
    if (input[i] > temp) {
      result.unshift(input[i]);
      temp = input[i];
    }
  }
  console.log('reslt', result);
}

leadingNumbers2([200, 20, 40, 100, 30, 150, 25, 33, 75, 10]);
