// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

/* with new array */
var rotate1 = function(nums, k) {
    const result = [];
    for(let i=nums.length-k; i<nums.length;i++) {
        result.push(nums[i])
    }
    for(let i=0; i<nums.length-k;i++) {
        result.push(nums[i])
    }
    return result
};

console.log(rotate([1,2,3,4,5], 2)) 

/* In place modifications */

function rotate(nums, k) {
  let n = nums.length
  if (k > nums.length) {
    k = k % n
  }
  const reverse = (start, end) => {
    while (start < end) {
      let temp = nums[start]
      nums[start] = nums[end]
      nums[end] = temp
      start++
      end--
    }
  }
  reverse(0, n - 1)
  reverse(0, k - 1)
  reverse(k, n - 1)
  return nums
}

console.log(rotate([1, 2, 3, 4, 5], 2))
