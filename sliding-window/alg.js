{
  const arr = [3, 2, 1, 0, 1, 2, 3, 4, 5, 6];
  const winSize = 3;
  // Highest: 15 (4 + 5 + 6)

  console.log(highestSum(arr, winSize));

  function highestSum(arr, winSize) {
    let prevHighest = 0;
    let currentSum;

    // Solution 1
    // let prevSum;

    // for (let i = 0; i < winSize; i++) {
    //   prevHighest += arr[i];
    //   prevSum = prevHighest;
    // }

    // for (let i = 1; i <= arr.length - winSize; i++) {
    //   currentSum = prevSum - arr[i - 1] + arr[i + winSize - 1];

    //   if (currentSum > prevHighest) {
    //     prevHighest = currentSum;
    //   }

    //   prevSum = currentSum;
    // }

    // Solution 2
    // for (let i = 0; i <= arr.length - winSize; i++) {
    //   currentSum = 0;

    //   for (let j = 0; j < winSize; j++) {
    //     currentSum += arr[i + j];
    //   }

    //   if (currentSum > prevHighest) {
    //     prevHighest = currentSum;
    //   }
    // }

    // Solution 3
    currentSum = 0;
    let start = 0;
    let end = 0;

    while (end < arr.length) {
      currentSum += arr[end];

      if (end >= winSize - 1) {
        prevHighest = Math.max(prevHighest, currentSum);
        currentSum -= arr[start];
        start++;
      }

      end++;
    }

    // Return for all solutions
    return prevHighest;
  }
}
