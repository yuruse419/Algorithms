// given an array of numbers: 
// return an array where each element is the product of all elements except for the current index's element in the original array 

(function(){
    const arr = [1, 2, 3, 4, 2];

    console.log(productExceptSelf(arr));

    function productExceptSelf(arr) {
        const returnArr = [];
        let totalProduct = arr.length > 0 ? 1 : 0;

        for(let i = 0; i < arr.length; i++) {
            totalProduct *= arr[i];
        }

        for(let i = 0; i < arr.length; i++) {
            returnArr.push(totalProduct / arr[i]);
        }

        return returnArr;
    }
})();