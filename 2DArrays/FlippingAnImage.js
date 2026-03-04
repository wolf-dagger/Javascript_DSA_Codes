"use strict"

const image = [[1, 1, 0], [1, 0, 1], [0, 0, 0]];

console.log(ImageFlipping(image));

function ImageFlipping(arr) {

    for (let i = 0; i < arr.length; i++) {
        let end = arr[i].length - 1;
        for (let start = 0; start < arr.length / 2; start++) {
            let temp = arr[i][start];
            arr[i][start] = arr[i][end];
            arr[i][end] = temp;
            end--;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] === 1) {
                arr[i][j] = 0;
            } else {
                arr[i][j] = 1;
            }
        }
    }

    return arr;

}