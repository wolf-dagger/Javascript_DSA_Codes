// https://leetcode.com/problems/minimum-window-substring/description/

function solve(s, t) {
    let tMap = new Map();
    let sMap = new Map();

    for (let a of t) {
        tMap.set(a, (tMap.get(a) || 0) + 1);
    }

    let left = 0;
    let required = tMap.size;
    let formed = 0;
    let minLen = Number.MAX_SAFE_INTEGER;
    let start = 0;

    for (let right = 0; right < s.length; right++) {
        let ch = s[right];

        sMap.set(ch, (sMap.get(ch) || 0) + 1);

        if (tMap.has(ch) && sMap.get(ch) === tMap.get(ch)) formed++;

        while (required === formed) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }

            let leftChar = s[left];
            sMap.set(leftChar, (sMap.get(leftChar) || 0) - 1);

            if (tMap.has(leftChar) && sMap.get(leftChar) < tMap.get(leftChar)) formed--;

            left++;
        }
    }

    return minLen === Number.MAX_SAFE_INTEGER ? "" : s.slice(start, start + minLen);
}

let s = "ADOBECODEBANC";
let t = "ABC";
console.log(solve(s, t)); // "BANC"

// O(n + m)