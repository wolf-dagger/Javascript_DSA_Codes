// https://leetcode.com/problems/subsets/description/

function solve(arr) {
    let resList = [];
    let tempList = [];

    backtrack(resList, tempList, 0, arr);

    return resList;
}

function backtrack(resSet, tempSet, start, arr) {

    resSet.push([...tempSet]);

    for (let i = start; i < arr.length; i++) {

        tempSet.push(arr[i]);

        backtrack(resSet, tempSet, i + 1, arr);

        tempSet.pop();
    }
}

let arr = [1, 2, 3];
console.log(solve(arr));

// O(2^n)