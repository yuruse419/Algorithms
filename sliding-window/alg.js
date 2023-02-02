/* 
    Given an unsorted array of numbers, arr, and a "window size," winSize, return the sum of the window whose sum is highest.

    Calculations:
        Method 1:
            Calculations for each window sum equals 3, except for the first which equals winSize. The number of windows equals (arr.length - winSize + 1).
            Total Calculations: winSize + (arr.length - winSize) * 3.
        Method 2:
            Calculations for each window sum equals winSize. The number of windows equals (arr.length - winSize + 1).
            Total Calculations: (arr.length - winSize + 1) * winSize.
        
        Distinctions:
            If winSize is greater than three but less than arr.length, Method 1 will have less calculations than Method 2.
            If winSize is less than three, Method 2 will have less calculations than Method 1.
            If winSize is three or the same as arr.length, Method 1 and Method 2 will have equal calculations.
*/

(function() {
    const arr = [3, 2, 1, 0, 1, 2, 3, 4, 5, 6];
    const winSize = 3;

    console.log(highestSum(arr, winSize));

    function highestSum(arr, winSize) {
        // Method 1
        // const sumData = {
        //     lastHighest: 0
        //     // lastSum,
        //     // currentSum
        // };

        // // calculate first window sum
        // for(let i = 0; i < winSize; i++) {
        //     sumData.lastHighest += arr[i];
        //     sumData.lastSum = sumData.lastHighest;
        // }

        // // iterate over the array from its second element to the element that starts its last window
        // for(let i = 1; i <= arr.length - winSize; i++) {
        //     // set the current sum as the last 
        //     sumData.currentSum = sumData.lastSum - arr[i - 1] + arr[i + winSize - 1];

        //     if(sumData.currentSum > sumData.lastHighest) {
        //         sumData.lastHighest = sumData.currentSum;
        //     }

        //     sumData.lastSum = sumData.currentSum;
        // }

        // return sumData.lastHighest;

        /* Method 2
        let lastHighest = 0;
        let currentSum;

        for(let i = 0; i <= arr.length - winSize; i++) {
            currentSum = 0;

            for(let j = 0; j < winSize; j++) {
                currentSum += arr[i + j];
            }

            if(currentSum > lastHighest) {
                lastHighest = currentSum;
            }
        }

        return lastHighest;
        */

        // Method 3
        let maxSum = 0;
        let windowSum = 0;
        let start = 0; // beginning of window
        let end = 0; // end of window

        while (end < arr.length) {
            windowSum += arr[end]; // add next element to rolling window

            console.log(`end: ${end}`);

            if (end >= winSize - 1) { // when the first window size reaches winSize, ...
                maxSum = Math.max(maxSum, windowSum); // check/update if new window's sum is greater than the previous window's sum
                windowSum -= arr[start]; // remove the first element from the rolling window
                start++; // update the start pointer to follow the rolling window's first element
            }

            end++; // update the end pointer to follow the rolling window's last element
        }
        
        return maxSum;
    }
})();