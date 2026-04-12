// https://www.geeksforgeeks.org/dsa/minimize-maxai-bj-ck-minai-bj-ck-three-different-sorted-arrays/

function solve(arr1, arr2, arr3) {
    let i = 0, j = 0, k = 0;
    let minDiff = Number.MAX_SAFE_INTEGER;

    while (i < arr1.length && j < arr2.length && k < arr3.length) {
        let maxVal = Math.max(arr1[i], arr2[j], arr3[k]);
        let minVal = Math.min(arr1[i], arr2[j], arr3[k]);

        minDiff = Math.min(minDiff, maxVal - minVal);

        if (arr1[i] === minVal) {
            i++;
        } else if (arr2[j] === minVal) {
            j++;
        } else {
            k++;
        }
    }
    return minDiff;
}

let arr1 = [1, 4, 5, 8, 10], arr2 = [6, 9, 15], arr3 = [2, 3, 6, 6];
console.log(solve(arr1, arr2, arr3));