// // Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// // An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Assume that all elements are of the same length and there are no repeating characters in elements

(function() {
    const arr = ['abc', 'cba', 'dEf', 'fed', 'edf'];

    console.log(groupAnagrams(arr));
    
    function groupAnagrams(arr) {
        let returnArr = [];
        let cache = {};
        let sum;

        for(let i = 0; i < arr.length; i++) {
            sum = 0;

            for(let j = 0; j < arr[i].length; j++) {
                sum += arr[i].toLowerCase().charCodeAt(j);
            }

            if(!cache[sum]) {
                cache[sum] = [];
            }

            cache[sum].push(arr[i]);

            console.log(sum);
        }

        for(key in cache) {
            returnArr.push(cache[key]);
        }

        return returnArr;
    }
})();