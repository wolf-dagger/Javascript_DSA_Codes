// https://leetcode.com/problems/palindrome-pairs/

function solve(words) {
    let map = new Map();
    let result = [];

    for (let i = 0; i < words.length; i++) {
        map.set(words[i], i);
    }

    for (let i = 0; i < words.length; i++) {
        let w = words[i];

        let rev = reverse(w);

        if (map.has(rev) && map.get(rev) !== i) {
            result.push([i, map.get(rev)]);
        }

        if (w === "") {
            for (let [word, idx] of map) {
                if (idx !== i && isPalin(word, 0, word.length - 1)) {
                    result.push([i, idx]);
                    result.push([idx, i]);
                }
            }
            continue;
        }

        for (let j = 1; j < w.length; j++) {
            let prefix = w.slice(0, j);
            let suffix = w.slice(j);

            if (isPalin(prefix, 0, prefix.length - 1)) {
                let revSuffix = reverse(suffix);
                if (map.has(revSuffix) && map.get(revSuffix) !== i) {
                    result.push([map.get(revSuffix), i]);
                }
            }

            if (isPalin(suffix, 0, suffix.length - 1)) {
                let revPrefix = reverse(prefix);
                if (map.has(revPrefix) && map.get(revPrefix) !== i) {
                    result.push([i, map.get(revPrefix)]);
                }
            }
        }
    }
    return result;
}

function isPalin(s, left, right) {
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}

function reverse(s) {
    return s.split('').reverse().join('');
}

let words = ["abcd", "dcba", "lls", "s", "sssll"];
console.log(solve(words));