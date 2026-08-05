// https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1

function solve(arr, dep) {
    arr.sort((a, b) => a - b);
    dep.sort((a, b) => a - b);

    let i = 0;
    let j = 0;

    let currPlatform = 0;
    let maxPlatform = 0;

    while (i < arr.length && j < dep.length) {
        if (arr[i] <= dep[j]) {
            currPlatform++;
            maxPlatform = Math.max(maxPlatform, currPlatform);
            i++;
        } else {
            currPlatform--;
            j++;
        }
    }

    return maxPlatform;
}

const arr = [900, 940, 950, 1100, 1500, 1800];
const dep = [910, 1200, 1120, 1130, 1900, 2000];

console.log(solve(arr, dep));