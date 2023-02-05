# alg.js

## Intention
This algorithm demonstrates a solution for returning an array where each element is the **product of all elements except the current index's element** from the input array. 
    * For illustration, given an input array **[1, 2, 3]**, the output array would be **[(2 * 3), (1 * 3), (1 * 2)]**, or **[6, 3, 2]**.

## Preface
1. A check is done to verify there is at least one element in the input array. If there is not, an empty array is returned.
2. No validation is performed to verify that all elements in the input array are of type number.
3. This solution has a linear time complexity.

### Solution
1. Two variables are initialized: 
    * **returnArr**: The array to be returned.
    * **totalProduct**: A variable to store the product of all elements in the original array. It is initialized to **1**.
2. The input array is iterated over entirely.
    * **totalProduct** is multiplied to each element.
3. The input array is iterated over entirely again.
    * Elements are added to **returnArr** with values equal to **totalProduct** divided by the input array's current index's element.
3. **returnArr** is returned.