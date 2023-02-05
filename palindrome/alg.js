{
    const str1 = 'Noon';

    console.log(isPalindrome(str1));

    function isPalindrome(str) {
        str = str.toLowerCase();

        let left = 0;
        let right = str.length - 1;

        while(left < right) {
            if(str[left] !== str[right]) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}