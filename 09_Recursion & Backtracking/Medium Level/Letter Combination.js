// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

function solve(digits) {
    if (digits.length === 0) return [];

    const phone = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };

    const result = [];

    function backtrack(index, current) {
        if (index === digits.length) {
            result.push(current);
            return;
        }

        const digit = digits[index];
        const letters = phone[digit];

        for (let letter of letters) {
            backtrack(index + 1, current + letter);
        }
    }

    backtrack(0, "");

    return result;
}


let digits = "23";
console.log(solve(digits));

