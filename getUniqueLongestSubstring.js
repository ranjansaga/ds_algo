/* This is a sliding window problem. we need to get the longest window having unique characters.*/

function getUniqueLongestSubstring(s) {
  const myMap = {} // A map to track repeated characters and adjust the window accordingly
  let p1 = 0 // start pointer of our window
  let p2 = 0 // end pointer of our window
  let maxLen = 0 // length of longest substring
  let substr = "" // longest substring value
  
  // Iterate on each character of the string using p2 pointer, check if current  character exists in the map and its index is greater than p1 pointer. If yes then we will move the pl pointer to index of next character where we found the existing 
  
  
  // For example 'abcab', here p1 will move from 0 index to 2(character 'c').
  for (let p2 = 0; p2 < s.length; p2++) {
    if (myMap[s[p2]] !== undefined && myMap[s[p2]] >= p1) {
      p1 = myMap[s[p2]] + 1
    }

    // Update the map with every character
    myMap[s[p2]] = p2;

		// calculate the max length by checking if current window is greater than previous once. Adding 1 as we are subracting the index and we want to consider the character at current index too.
    if (p2 - p1 + 1 > maxLen) {
      maxLen = p2 - p1 + 1;
      substr = s.slice(p1,p2+1)
      
    }
  }
  console.log(maxLen, substr)
  return maxLen
} 

getUniqueLongestSubstring("abcabcbb")
getUniqueLongestSubstring("pwwkew")
getUniqueLongestSubstring("bbbbb")
getUniqueLongestSubstring("abcab")
