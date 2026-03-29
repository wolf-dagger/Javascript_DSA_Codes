// https://leetcode.com/problems/permutations/description/

function solve(arr) {
    let res = [];

    function backtrack(tempList) {
        if (tempList.length === arr.length) {
            res.push([...tempList]);
            return;
        }

        for (let number of arr) {
            if (tempList.includes(number)) continue;

            tempList.push(number);

            backtrack(tempList);

            tempList.pop();
        }
    }

    backtrack([]);
    return res;
}

let arr = [1, 2, 3];
console.log(solve(arr));

// O(n! * n)