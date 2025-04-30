1859. Sorting the Sentence

Input: s = "is2 sentence4 This1 a3"
Output: "This is a sentence"
Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.

/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
    let sArray = s.split(' ');
    let sorted = new Array(sArray.length);
    sArray.forEach((word) => {
        const index = parseInt(word.slice(-1));
        sorted[index-1] = word.slice(0, -1)
    });
    return sorted.join(' ')
};
