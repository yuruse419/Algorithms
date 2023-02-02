/*
# Longest substring without repeating character

### Given a string s, find the length of the longest substring without repeating characters.

- Example 1:

`Input: s = "abcabcbb"
Output: 3`
- Explanation: The answer is "abc", with the length of 3.
- Example 2:

`Input: s = "bbbbb"
Output: 1`
- Explanation: The answer is "b", with the length of 1.
- Example 3:

`Input: s = "pwwkew"
Output: 3`
- Explanation: The answer is "wke", with the length of 3.
- Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

### Constraints:

`0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.`
*/

// ES6 minimal IIFE Format (Function Context Syntax)
{
    const s = 'abcabcdaefghiabcdefg';

    console.log(longestNoRepeat(s));

    function longestNoRepeat(s) {
        let start = 0;
        let end = 0;
        let longest = 0;
        const rollingWindow = new Set();

        while(end < s.length) {
            if(rollingWindow.has(s[end])) {
                longest = Math.max(longest, rollingWindow.size);
                console.log(rollingWindow);

                start = end;

                rollingWindow.clear();
            }
            else {
                rollingWindow.add(s[end]);

                end++;
            }
        }

        longest = Math.max(longest, rollingWindow.size);
        console.log(rollingWindow);

        return longest;
    }
}