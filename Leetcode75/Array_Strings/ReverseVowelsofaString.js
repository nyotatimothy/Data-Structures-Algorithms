/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const charArray = s.split('');

    const isVowel = (char) => {
        return `aeiouAEIOU`.includes(char);
    };

    let left = 0;
    let right = charArray.length - 1;


    while (left < right) {
        while (left < right && !isVowel(charArray[left])) {
            left++;
        }

        while (left < right && !isVowel(charArray[right])) {
            right--;
        }

        if (left < right) {
            [charArray[left], charArray[right]] = [charArray[right], charArray[left]];
            left++;
            right--;
        }
    }

    return charArray.join('');

    
};


console.log(reverseVowels("hello"));
console.log(reverseVowels("IceCream"));
console.log(reverseVowels("leetcode"));