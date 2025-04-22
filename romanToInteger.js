// Input string: s
// length of input string: n
// Example: s: 'CMXCIV', n: 6
function romanToInteger(s, n) {
  let output = 0;
  const romanDict = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  for (let i = 0; i < n; i++) {
    let curr = romanDict[s[i]];
    if (i + 1 < n) {
      let next = romanDict[s[i + 1]];
      if (curr >= next) {
        output += curr; // Add current value to the result
      } else {
        output -= curr; // Subtract current value because it's part of a smaller numeral (like IV)
      }
    } else {
      output += curr; // For the last character, just add it
    }
  }
  return output;
}

console.log(romanToInteger('CMXCIV', 6)); // Output: 14
