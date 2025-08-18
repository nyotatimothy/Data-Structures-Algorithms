/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    if (candies.length === 0) return [];
    const maxCandies = Math.max(...candies);

    return candies.map(kidCandies => 
    kidCandies + extraCandies >= maxCandies
    );
};
