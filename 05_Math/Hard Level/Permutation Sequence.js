// https://leetcode.com/problems/permutation-sequence/description/

function solve(n, k) {
    let nums = [];
    let fact = 1;

    for (let i = 1; i < n; i++) {
        fact *= i;
        nums.push(i);
    }

    nums.push(n);
    k--;

    let result = "";

    while (true) {
        let index = Math.floor(k / fact);
        result += nums[index];

        nums.splice(index, 1);

        if (nums.length === 0) break;

        k %= fact;
        fact = Math.floor(fact / nums.length);
    }

    return result;
}

let n = 3;
let k = 3;

console.log(solve(n, k));