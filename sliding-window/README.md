# alg.js

## Intention

This algorithm demonstrates three solutions for taking an unsorted array of numbers and a given "window size," winSize, to return the sum of the window whose sum is highest.

## Preface

1. The first two solutions were initial attempts at solving this, and the third utilizes a different approach.
2. Two variables are used in common for all three solutions:
   - **prevHighest**: Stores the previous highest window sum. Initialized to 0.
   - **currentSum**: Stores the current window sum.
3. **prevHighest** is returned for all three solutions.

### Solution 1

1. A third variable is used:
   - **prevSum**: Stores the previous window sum. Not assigned a value until used.
2. The first window is iterated over completely:
   - **prevHighest** and **prevSum** are assigned to the sums of all elements in this window.
3. The array is iterated over from its second element (**index = 1**) to the first element of the last window (**index = (length - winSize)**):
   - **currentSum** is assigned the value of **prevSum** minus the last element of the previous window and plus the last element of the current window.
   - If **currentSum** is greater than **prevHighest**, **prevHighest** is assigned the value of **currentSum**.
   - **prevSum** is also assigned the value of **currentSum**, but on every iteration regardless of any conditionals.

### Solution 2

1. The array is iterated over from the first element (**index = 0**) to the first element of the last window (**index = (length - winSize)**)
   - **currentSum** is assigned a value of 0.
   - The elements in the current window are iterated over.
     - **currentSum** is accumulated with the values of these elements.
   - If **currentSum** is greater than **prevHighest**, **prevHighest** is assigned the value of **currentSum**.
2. **prevHighest** is returned.

### Solution 3

1. Two additional variables are used, and **currentSum** is initialized to 0:
   - **start**: The start index of the sliding window. Initialized to 0.
   - **end**: The end index of the sliding window. Initialized to 0.
2. A while loop is used with the condition that end is less than the array's length.
   - The element at index **end** is added to **currentSum**.
   - A check is made for if end is greater than or equal to the window size minus one. That is, on every iteration after the first window's sum is calculated:
     - **prevHighest** is checked against **currentSum** to keep/update its value.
       - _Math.max_ is used to do the comparison of which is higher.
     - The element at index **start** is subtracted from **currentSum**.
     - **start** is incremented.
       - Note that **start** is only incremented after the first window's sum is calculated, but at this point both **start** and **end** are incremented together to keep the window "sliding."
   - **end** is incremented.

# alg2.js

## Intention

This algorithm demonstrates a solution for returning the length of the longest substring without repeating characters of a given string.

## Preface

1. This solution utilizes a Set.
2. This solution has a linear time complexity.

### Solution

1. Four variables are initialized:
   - **start**: The index of the first character in the current substring. Initialized to 0.
   - **end**: The index of the last character in the current substring. Initialized to 0.
   - **longest**: The length of the longest substring thus far. Initialized to 0.
   - **rollingWindow**: A Set of string characters.
2. A while loop is used with the condition that end is less than the input string's length.
   - A check is made for if **rollingWindow** contains the character at the **end** index.
     - If it does:
       - _Math.max_ is used to check/update **longest**.
       - **start** is set to the value of **end**.
         - This jumps to the start of the next substring that can possibly have a length greater than **longest**.
       - **rollingWindow** is cleared of its stored items.
     - If it does not:
       - The character at the **end** index is added to **rollingWindow**.
       - **end** is incremented by one.
3. After the while loop, a final check is done to update **longest**, and **longest** is returned.
