// https://leetcode.com/problems/maximum-units-on-a-truck/description/

function solve(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);

    let totalUnits = 0;

    for (const [boxes, units] of boxTypes) {
        const boxesToTake = Math.min(boxes, truckSize);
        totalUnits += boxesToTake * units;
        truckSize -= boxesToTake;

        if (truckSize === 0) break;
    }

    return totalUnits;
}

const boxTypes = [[1, 3], [2, 2], [3, 1]];
const truckSize = 4;

console.log(solve(boxTypes, truckSize));