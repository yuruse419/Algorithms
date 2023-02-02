const arr = [1, 2, 3, 5, 4, 9, 2, 6, 5];
const sum = 15;

function twoSum(sum, arr) {
    // brute force
    // for(var i = 0; i < arr.length; i++) {
    //     for(var j = i + 1; j < arr.length; j++) {
    //         if(arr[i] + arr[j] === sum) {
    //             return [arr[i], arr[j]];
    //         }
    //     }
    // }

    // return false;

    // optimized
    const cache = {};
    let neededNumber;

    for(let i = 0; i < arr.length; i++) {
        neededNumber = sum - arr[i]
        if(cache[neededNumber]) {
            return [arr[i], neededNumber];
        }

        cache[arr[i]] = i;
    }

    return false;
}

console.log(twoSum(sum, arr));