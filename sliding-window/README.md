# alg.js

## Intention

This algorithm demonstrates three solutions for taking an unsorted array of numbers and a given "window size" to return the sum of the window whose sum is highest.

## Preface

1. The first solution is the initial attempt at solving this, and the second is a cleaned up version of it with increased efficiency.
2. The lengths of both strings are compared first, and if they do not equal, it is immediately determined that they are not anagrams.
3.
4. Both solutions have a linear time complexity.

### Solution 1

1. Another data structure, an object, is utilized to store necessary values:
   -

// Method 1
// const sumData = {
// lastHighest: 0
// // lastSum,
// // currentSum
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

### Solution 2

1. The first string is iterated over with a for loop, and properties are added to the object.
   - The keys are now just the characters at each index in the first string: **[string1[index]]**.
   - The values will equal the number of times the character at **index** has appeared.
2. The second string is then iterated over with a for loop, and a decrement is applied to each property value in the object.
   - If a character in the second string is not a property key in the object, or if it is but its value is 0, it is determined that the strings are not anagrams.
   - If both of these checks are passed, it will decrement the property value by one.
     - By doing this, we know that if the same character appears again in the second string but its property value in the object is 0, the character appears more times in the second string than it does the first.
3. If it completes the iteration over the second string, it is determined that the strings are anagrams.

# alg2.js

## Intention

This algorithm demonstrates a solution for comparing strings in an array and grouping together ones that are anagrams of each other.

## Preface

1. It is assumed that all strings are of the same length and none of them have repeating characters. If characters repeated, a different solution would need to be implemented.
2. The results are returned in an array. Grouped anagrams are in subarrays of this array.
3. ASCII codes are used as assignment of numeric value to a-z letters. Anagrams are identified by these values: All strings whose characters have the same ASCII value sum are anagrams, given that there are no repeated characters.
4. The _toLowerCase_ string method is used to ensure characters are given the same ASCII value regardless of capitalization.
5. Another data structure, an object, is utilized to group strings with equal ASCII value sums.
6. This solution has a linear time complexity.

### Solution

1. Three variables are initialized:
   - **returnArr**: An array to store subarrays of anagrams.
   - **cache**: An object whose property keys are the ASCII value sums of each character in each string and whose property values are arrays of the strings with the associated ASCII value sum.
   - **sum**: A number to sum up ASCII values for each character in each string.
2. The input array is iterated over, ASCII value sums are calculated and stored in **sum**, and properties are added to **cache**.
   - This solution requires a nested for loop to iterate over the characters in each string.
   - If a property does not exist for the current value of **sum**, it is created with an empty array as its value.
   - The string is pushed to the array at the property with the current value of **sum** as its key, which was either just created or was created for a previous string.
3. **cache** is iterated over, and each property value (i.e., each array of anagrams) is pushed to **returnArr**.
4. **returnArr** is returned.
