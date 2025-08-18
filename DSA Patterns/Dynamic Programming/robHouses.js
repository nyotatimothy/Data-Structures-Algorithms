/* 
You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that 
adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were 
robbed on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight 
without alerting the police.
 */

function rob(houses) {
    // If there are no houses, return 0
    if (houses.length === 0) {
        return 0;
    }
    // If there is only one house, return its value
    if (houses.length === 1) {
        return houses[0];
    }
    // Initialize the dp array to store the maximum money that can be robbed
    const dp = new Array(houses.length);
    // Set the value of the first house
    dp[0] = houses[0];

    // Set the value of the second house to the maximum of House 1 and House 2 
    dp[1] = Math.max(houses[0], houses[1]);

    // Starting from house 3, we will iterate through the houses and decide whether to rob the current house or not
    for (let i = 2; i < houses.length; i++) {
        dp[i] = Math.max(dp[i - 1], houses[i] + dp[i - 2]);
    }
    // Return the maximum cash that can be robbed
    return dp[houses.legth - 1];

}



// How we test
const houses = [2,7,9,3,1]
console.log(rob(houses));