function getLongestSubstring(inputStr) {
  const subchars = ['A', 'C', 'G', 'T'];
  let count = 0;
  let result = 0;
  for (let i = 0; i < inputStr.length; i++) {
    if (subchars.includes(inputStr[i])) {
      count = count + 1;
      result = count > result ? count : result;
    } else {
      count = 0;
    }
  }
  return result;
}

console.log('result', getLongestSubstring('NATERGCTAXXAGCAAGGTACG'));

console.log('result', getLongestSubstring('SRDDGATTACAYIOPUACGTGCAGCT'));
