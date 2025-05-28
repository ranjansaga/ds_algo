// An array arr[]

// An integer k (size of the window)

// Task: For every subarray/window of size k, print the first negative number in that window.
// If there is no negative number, print 0.

// Example

// arr = [12, -1, -7, 8, 15, 30, 16, 28]
// k = 3

// Expected Output:
// -1 -1 -7 0 0 0

function firstNegativeInWindow(arr, k) {
  let queue = []
  let result = []

  let start = 0

  for (let end = 0; end < arr.length; end++) {
    // Step 1: Add negative numbers to the queue
    if (arr[end] < 0) {
      queue.push(arr[end])
    }

    // Step 2: When window size hits k
    if (end - start + 1 === k) {
      // Step 3: Record first negative (if any) from the queue
      if (queue.length === 0) {
        result.push(0)
      } else {
        result.push(queue[0])
      }

      // Step 4: Slide the window – remove leftmost element if it's in queue
      if (arr[start] === queue[0]) {
        queue.shift()
      }

      start++
    }
  }

  return result
}

