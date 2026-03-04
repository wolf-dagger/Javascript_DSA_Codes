const matrix =
    [[1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]]

matrix[0][0] = 'x'
matrix[1][2] = 'o'

for (let row of matrix) {
    const rowString = row.join(' ');
    console.log(rowString)
}