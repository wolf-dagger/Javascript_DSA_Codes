// https://leetcode.com/problems/sort-colors/description/

function solve(arr) {
    let start = 0;
    let end = arr.length - 1;
    let middle = 0;

    while (middle <= end) {
        switch (arr[middle]) {
            case 0:
                [arr[start], arr[middle]] = [arr[middle], arr[start]];
                middle++;
                start++;
                break;

            case 1:
                middle++;
                break;

            case 2:
                [arr[middle], arr[end]] = [arr[end], arr[middle]];
                end--;
                break;
        }
    }
    return arr;
}

let arr = [2, 0, 2, 1, 1, 0];
console.log(solve(arr));

// O(n)