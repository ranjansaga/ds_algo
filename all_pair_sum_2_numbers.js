const arr = [1, 3, 4, 5, 6, 2, 1];

const allTwoSum = (arr, target) => {
  const map = {};
  const results = [];

  // Push target - arr[i] inside map in a loop.
  // setting it to true for easy check for item
  // existance in map.
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      results.push([target - arr[i], arr[i]]);
      // Using continue removes duplicates.
      continue;
    }
    map[target - arr[i]] = true;
    console.log('map', map);
  }
  return results;
};

console.log(allTwoSum(arr, 7));
