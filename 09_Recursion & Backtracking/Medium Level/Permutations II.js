// https://leetcode.com/problems/permutations-ii/description/

function solve(arr) {
    let res = [];
    let temp = [];
    let used = new Array(arr.length).fill(false);

    // Step 1: Sort to group duplicates
    arr.sort((a, b) => a - b);

    backtrack(arr, temp, used, res);
    return res;
}

function backtrack(arr, temp, used, res) {
    // Base case
    if (temp.length === arr.length) {
        res.push([...temp]);
        return;
    }

    for (let i = 0; i < arr.length; i++) {

        // Skip used numbers
        if (used[i]) continue;

        // Skip duplicates
        if (i > 0 && arr[i] === arr[i - 1] && !used[i - 1]) {
            continue;
        }

        // Choose
        temp.push(arr[i]);
        used[i] = true;

        // Explore
        backtrack(arr, temp, used, res);

        // Un-choose (backtrack)
        temp.pop();
        used[i] = false;
    }
}

let arr = [1, 1, 2];
console.log(solve(arr));

// O(n!)