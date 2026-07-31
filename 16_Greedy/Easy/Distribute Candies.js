// https://leetcode.com/problems/distribute-candies/description/

function solve(candyType) {
    const set = new Set(candyType);
    const n = candyType.length;
    const canEat = n / 2;
    const uniqueCount = set.size;

    return canEat > uniqueCount ? uniqueCount : canEat;
}

const candyTypes = [1, 1, 2, 2, 3, 3];
console.log(solve(candyTypes));