// two-sum with a sorted array (incrementing values)
// return array of values that add up to sum, or return false

(function() {
    const sum = 11;
    const arr = [1, 3, 5, 7, 9, 13];

    console.log(multiplePointers(sum, arr));

    function multiplePointers(sum, arr) {
        let left = 0;
        let right = arr.length - 1;

        // initial checks for sum too low or too high
        if(arr[left] > sum || arr[right] + arr[right - 1] < sum) {
            return false;
        }

        while(left < right) {
            console.log(arr[left] + ', ' + arr[right]);

            if(arr[left] + arr[right] === sum) {
                return [arr[left], arr[right]];
            }
            else if(arr[left] + arr[right] < sum) {
                left++;
            }
            else {
                right--;
            }
        }

        return false;
    }
})();