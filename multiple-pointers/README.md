# alg.js

## Intention
This algorithm demonstrates a solution for comparing sums of elements in a sorted, ascending array and returning another array of the first two elements that add up to a specified sum. 

## Preface
1. This solution has a linear time complexity.

### Solution
1. Two variables are initialized: 
    * **left**: Stores the leftmost pointer, starting at the beginning of the input array.
    * **right**: Stores the rightmost pointer, starting at the end of the input array.
2. Two initial checks are done to skip unnecessary calculations:
    * If the leftmost value (i.e., the lowest value) is greater than the specified sum, it is determined that the sums of any two elements will be greater than the specified sum.
    * If the sum of the rightmost value and its neighbor value (i.e., the highest possible sum) is less than the specified sum, it is determined that the sums of any two elements will be less than the specified sum.
3. While **left** is less than **right**, the following checks are made:
    * If the sum of the elements at indexes **left** and **right** equals sum, return those elements in an array.
    * Else if the sum of the elements at indexes **left** and **right** is less than sum, increment **left**.
    * Else, decrement **right**.
        * With the implication that the sum of the elements at indexes **left** and **right** is greater than sum.
4. If no value is returned after **left** is equal to **right**, return **false**.