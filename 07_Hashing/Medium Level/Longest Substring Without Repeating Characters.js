// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

function solve(s) {
    let set = new Set();
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }

        set.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}

let s = "abcabcbb";
console.log(solve(s));

// Time Complexity: O(n)