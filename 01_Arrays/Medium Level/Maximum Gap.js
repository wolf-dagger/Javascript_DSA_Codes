// https://leetcode.com/problems/maximum-gap/description/

function solve(nums) {
    let n = nums.length;
    if (n < 2) return 0;

    let min = Math.min(...nums);
    let max = Math.max(...nums);

    if (min === max) return 0;

    let bucketSize = Math.max(1, Math.floor((max - min) / (n - 1)));
    let bucketCount = Math.floor((max - min) / bucketSize) + 1;

    let buckets = Array(bucketCount).fill(null).map(() => ({
        min: Infinity,
        max: -Infinity
    }));

    for (let num of nums) {
        let index = Math.floor((num - min) / bucketSize);
        buckets[index].min = Math.min(buckets[index].min, num);
        buckets[index].max = Math.max(buckets[index].max, num);
    }

    let maxGap = 0;
    let prevMax = min;

    for (let bucket of buckets) {
        if (bucket.min === Infinity) continue;

        maxGap = Math.max(maxGap, bucket.min - prevMax);
        prevMax = bucket.max;
    }

    return maxGap;
}

let arr = [3, 6, 9, 1];
console.log(solve(arr))

// O(n)