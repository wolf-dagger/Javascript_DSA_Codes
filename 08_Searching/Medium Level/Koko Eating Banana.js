// https://leetcode.com/problems/koko-eating-bananas/description/

function solve(arr, h) {
    let minSpeed = 1;
    let maxSpeed = Math.max(...arr);

    while (minSpeed < maxSpeed) {
        let mid = Math.floor(minSpeed + (maxSpeed - minSpeed) / 2);

        if (kokoCanEat(arr, h, mid)) {
            maxSpeed = mid;
        } else {
            minSpeed = mid + 1;
        }
    }

    return minSpeed;
}

function kokoCanEat(arr, h, speed) {
    let hour = 0;

    for (let pile of arr) {
        hour += Math.ceil(pile / speed);
    }

    return hour <= h;
}

let arr = [3, 6, 7, 11];
let hour = 8;

console.log(solve(arr, hour));
