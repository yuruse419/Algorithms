# alg.js

## Intention
This algorithm demonstrates a solution for checking if a string is a palindrome (i.e., the same forward and backward) and returns a Boolean indicating such.

## Preface
1. This solution utlizes the multiple pointers pattern.
2. The input string is reassigned to itself in all lowercase as a simple measure against cases like "Noon" or "Racecar."
3. When the input string has an odd number of characters, the center character is not checked, as there is no reason to compare a character to itself.
4. No data validation has been implemented to force only a-z and A-Z characters. 
5. This solution has a linear time complexity.

### Solution
1. Two variables are initialized: 
    * **left**: Stores the leftmost pointer, starting at the beginning of the input string.
    * **right**: Stores the rightmost pointer, starting at the end of the input string.
2. While **left** is less than **right**, the following check is made:
    * If the character at index **left** does not equal the character at index **right**, it is determined that the string is not a palindrome.
        * If this check is passed, **left** is incremented and **right** is decremented.
3. If it completes all of the checks over the string, it is determined that the string is a palindrome.