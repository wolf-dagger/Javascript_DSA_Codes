// https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/description/

function solve(arr, k) {
    let map = new Map();

    for (let ele of arr) {
        let rem = ((ele % k) + k) % k;
        map.set(rem, (map.get(rem) || 0) + 1);
    }

    if ((map.get(0) || 0) % 2 !== 0) return false;

    for (let rem = 1; rem <= k / 2; rem++) {
        let comp = k - rem;

        if ((map.get(rem) || 0) !== (map.get(comp) || 0)) {
            return false;
        }
    }

    return true;
}

let arr = [1, 2, 3, 4, 5, 6];
let k = 10;

console.log(solve(arr, k));