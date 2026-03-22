// https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/description/

function preimageSizeFZF(k) {
    let left = 0;
    let right = 5 * (k + 1);

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (countZeros(mid) < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    if (countZeros(left) === k) {
        return 5;
    }

    return 0;
}

function countZeros(n) {
    let count = 0;

    while (n > 0) {
        n = Math.floor(n / 5);
        count += n;
    }

    return count;
}

let k = 0;
console.log(preimageSizeFZF(k));

// O(log k × log n)