export function calculateMean(array) {
  const sum = array.reduce((acc, curr) => acc + curr, 0);
  const average = sum / array.length;
  return average;
}

export function calculateMedian(arr) {
  arr.sort((a, b) => a - b);
  const mid = Math.floor(arr.length / 2);
  return arr.length % 2 === 0 ? (arr[mid] + arr[mid - 1]) / 2 : arr[mid];
}

export function calculateMode(arr) {
  // Create a map to store the counts of each element in the array.
  const counts = new Map();
  for (const element of arr) {
    if (counts.has(element)) {
      counts.set(element, counts.get(element) + 1);
    } else {
      counts.set(element, 1);
    }
  }

  // Find the element with the highest count.
  let maxCount = 0;
  let mode = null;
  for (const [element, count] of counts) {
    if (count > maxCount) {
      maxCount = count;
      mode = element;
    }
  }

  // Return the mode.
  return mode;
}
