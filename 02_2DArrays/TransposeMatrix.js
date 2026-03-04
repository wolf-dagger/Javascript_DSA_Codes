"use strict"

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(solve(matrix));

function solve(matrix) {
    let res = [];

    for (let i = 0; i < matrix[0].length; i++) {
        let temp = [];
        for (let j = 0; j < matrix.length; j++) {
            temp.push(matrix[j][i]);
        }
        res.push([...temp]);
    }
    return res;
}