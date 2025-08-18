/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    // initialize merged array to hold results as we merge
    // get the min length between the 2 strings
    // use for loop to merge the characters alternatingly
    // merge the remaiining characters
    // return merged array


    let merged = [];

    minLength  = Math.min(word1.length, word2.length);

    for (i =0; i < minLength; i++) {
        merged.push(word1[i]);
        merged.push(word2[i]);
    }


    merged.push(word1.slice(minLength));
    merged.push(word2.slice(minLength));

    return merged.join('');

};

console.log(mergeAlternately("abc", "pqr"));



