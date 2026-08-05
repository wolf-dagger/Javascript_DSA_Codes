function solve(n) {

    let prev = 1;
    let prevP = 0;

    let curr = 0;
    for (let i = 2; i <= n; i++) {
        curr = prev + prevP;
        prevP = prev;
        prev = curr;
    }

    return curr;
}

let n = 5;
console.log(solve(n));
