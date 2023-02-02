// use multiple pointers to check if two strings are palindromes

(function() {
    const str1 = 'noon';

    console.log(isPalindrome(str1));

    function isPalindrome(str) {
        const bounds = [0, str.length - 1]; // bounds[0] => left, bounds[1] => right

        while(bounds[0] < bounds[1]) {
            if(str[bounds[0]] !== str[bounds[1]]) {
                return false;
            }

            bounds[0]++;
            bounds[1]--;
        }

        return true;
    }
})();
