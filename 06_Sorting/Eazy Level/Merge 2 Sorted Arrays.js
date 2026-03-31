function solve(a, b) {
    let res = new Array(a.length + b.length);

    let i = 0, j = 0, k = 0;
    while (i < a.length && j < b.length) {
        if (a[i] <= b[j]) {
            res[k++] = a[i++];
        } else {
            res[k++] = b[j++];
        }
    }
    while (i < a.length) res[k++] = a[i++];
    while (j < b.length) res[k++] = b[j++];

    return res;
}

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

console.log(solve(arr1, arr2));

// O(n + m)