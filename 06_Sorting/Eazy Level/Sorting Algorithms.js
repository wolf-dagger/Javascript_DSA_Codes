function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let flag = false;

        for (let j = 1; j < arr.length - i; j++) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
                flag = true;
            }
        }
        if (!flag) break;
    }
    return arr;
}

function selectionSort(arr) {
    for (let usi = 0; usi < arr.length - 1; usi++) {
        let minIdx = usi;
        for (let i = usi + 1; i < arr.length; i++) {
            if (arr[i] < arr[minIdx]) minIdx = i;
        }
        [arr[usi], arr[minIdx]] = [arr[minIdx], arr[usi]];
    }
    return arr;
}

function insertionSort(arr) {
    for (let usi = 1; usi < arr.length; usi++) {
        let key = arr[usi];
        let curr;
        for (curr = usi - 1; curr >= 0 && arr[curr] > key; curr--) {
            arr[curr + 1] = arr[curr];
        }
        arr[curr + 1] = key;
    }
    return arr;
}

function mergeSort(arr, start, end) {

    if (start > end) return [];
    if (start === end) return [arr[start]];

    let mid = Math.floor((start + end) / 2);

    let firstHalf = mergeSort(arr, start, mid);
    let secondHalf = mergeSort(arr, mid + 1, end);

    return merge(firstHalf, secondHalf);
}

function merge(a, b) {
    let result = new Array(a.length + b.length);

    let i = 0, j = 0, k = 0;
    while (i < a.length && j < b.length) {
        if (a[i] <= b[j]) {
            result[k++] = a[i++];
        } else {
            result[k++] = b[j++];
        }
    }
    while (i < a.length) result[k++] = a[i++];
    while (j < b.length) result[k++] = b[j++];

    return result;
}

let arr = [40, 50, 20, 10, 30];
console.log(mergeSort(arr, 0, arr.length - 1));