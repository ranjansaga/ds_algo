var nextGreaterElement = function(n) {
    const digits = [...n.toString()];
    let i = digits.length - 2;

    // Step 1: Find the first decreasing digit from the right
    while (i >= 0 && digits[i] >= digits[i + 1]) {
        i--;
    }

    if (i < 0) return -1; // Digits are in descending order

    // Step 2: Find the smallest digit greater than digits[i] to the right
    let j = digits.length - 1;
    while (digits[j] <= digits[i]) {
        j--;
    }

    // Step 3: Swap i and j
    [digits[i], digits[j]] = [digits[j], digits[i]];

    // Step 4: Reverse the suffix (right side of i)
    const left = digits.slice(0, i + 1);
    const right = digits.slice(i + 1).reverse();
    const result = parseInt([...left, ...right].join(""));

    // Step 5: Check 32-bit limit
    return result > 2 ** 31 - 1 ? -1 : result;
};
