(function() {
    const string1 = 'abccz';
    const string2 = 'cbacc';

    console.log(isAnagram(string1, string2));

    function isAnagram(string1, string2) {
        if(string1.length !== string2.length) {
            return false;
        }

        const comparisonObj = {

        };

        /* First Working Solution
        for(let i = 0; i < string1.length; i++) {
            comparisonObj['1' + string1[i]] = comparisonObj['1' + string1[i]] + 1 || 1;
            comparisonObj['2' + string2[i]] = comparisonObj['2' + string2[i]] + 1 || 1;
        }

        for(let i = 0; i < Object.keys(comparisonObj).length / 2; i++) {
            console.log(comparisonObj['1' + string1[i]] + ' = ' + comparisonObj['2' + string1[i]] + '?');
            
            if(comparisonObj['1' + string1[i]] !== comparisonObj['2' + string1[i]])  {
                return false;
            }
        }

        return true;
        */

        // Second Working Solution
        for(let i = 0; i < string1.length; i++) {
            comparisonObj[string1[i]] = (comparisonObj[string1[i]] || 0) + 1;
        }

        console.log(comparisonObj);

        for(let i = 0; i < string2.length; i++) {
            if(!comparisonObj[string2[i]] || comparisonObj[string2[i]] === 0) {
                return false;
            }

            comparisonObj[string2[i]]--;
        }

        return true;
    }
})();