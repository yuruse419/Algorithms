{
    const arr = [1, 2, 3];

    console.log(productExceptSelf(arr));

    function productExceptSelf(arr) {
        if(arr.length === 0) {
            return [];
        }

        const returnArr = [];
        let totalProduct = 1;

        for(let i = 0; i < arr.length; i++) {
            totalProduct *= arr[i];
        }

        for(let i = 0; i < arr.length; i++) {
            returnArr.push(totalProduct / arr[i]);
        }

        return returnArr;
    }
}