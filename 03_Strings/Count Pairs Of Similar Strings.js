// https://leetcode.com/problems/count-pairs-of-similar-strings/description/

'use strict'


// BruteForce approach

function solve(words) {
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (checkSimilar(words[i], words[j])) {
                count++;
            }
        }
    }
    return count;
}

function checkSimilar(s, t) {
    let word1 = String(s).split('')
    let word2 = String(t).split('');
    let set1 = new Set(word1);
    let set2 = new Set(word2);

    if (set1.size !== set2.size) return false;

    for (let char of set1) {
        if (!set2.has(char)) return false;
    }

    return true;
}


//Optimal approach

function solve2(words) {
    let map = new Map();

    for (let word of words) {
        let key = [...new Set(word)].sort().join();

        map.set(key, (map.get(key) || 0) + 1);
    }

    let count = 0;

    for (let val of map.values()) {
        count += (val * (val - 1)) / 2;
    }
    return count;
}


const words = ["aba", "aabb", "abcd", "bac", "aabc"];

console.log(solve2(words));

// O(n)