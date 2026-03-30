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

let arr = [40, 50, 20, 10, 30];
console.log(insertionSort(arr));