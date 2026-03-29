// https://leetcode.com/problems/elimination-game/description/

function solve(n) {
    let head = 1;
    let step = 1;
    let remaining = n;
    let left = true;

    while (remaining > 1) {
        if (left || remaining % 2 === 1) {
            head += step;
        }

        remaining = Math.floor(remaining / 2);
        step *= 2;
        left = !left;
    }

    return head;
}

let n = 9
console.log(solve(n));

// O(log n)