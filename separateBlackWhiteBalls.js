// There are n balls on a table, each ball has a color black or white.

// You are given a 0-indexed binary string s of length n, where 1 and 0 represent black and white balls, respectively.

// In each step, you can choose two adjacent balls and swap them.

// Return the minimum number of steps to group all the black balls to the right and all the white balls to the left.


// Example 1:
// Input: s = "101"
// Output: 1
// Explanation: We can group all the black balls to the right in the following way:
// - Swap s[0] and s[1], s = "011".
// Initially, 1s are not grouped together, requiring at least 1 step to group them to the right.
// Example 2:
var minimumSteps = function(s) {
    let zeroCount = 0;  // number of zeros encountered so far
    let steps = 0;  // total number of swaps
    
    for (let i = s.length-1; i >=0 ; i--) {
        console.log(`Index ${i}, Char: ${s[i]}, ZeroCount: ${zeroCount}, Steps: ${steps}`);
        
        if (s[i] === '0') {
            zeroCount++;  // count number of white balls (0s) encountered
        } else if (s[i] === '1') {
            steps += zeroCount;  // for each 1, add the number of zeros before it to the steps
        }
    }
    
    return steps;  // return the total number of swaps
};

console.log(minimumSteps("100"));  // Expected Output: 2

