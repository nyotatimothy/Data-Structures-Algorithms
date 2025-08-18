/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (n === 0) return true;

    const bed = [...flowerbed];

    let plantedCount = 0;

    for (let i = 0; i < bed.length; i++) {
        if (bed[i] === 0) {
            const prevEmpty = i === 0 ||bed[i - 1 ] === 0;

            const nextEmpty = i === bed.length -1 || bed[i + 1 ] === 0;

            if (prevEmpty && nextEmpty) {
                bed[i] = 1;

                plantedCount++;

                if (plantedCount === n) {
                    return true
                }
            }
        }
    }
    return false;
};

console.log(canPlaceFlowers([1,0,0,0,1], 1));