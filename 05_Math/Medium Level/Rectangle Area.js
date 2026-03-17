// https://leetcode.com/problems/rectangle-area/

function solve(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {

    let AreaOfRectangle1 = (ax2 - ax1) * (ay2 - ay1);
    let AreaOfRectangle2 = (bx2 - bx1) * (by2 - by1);

    let overLapX = Math.min(ax2, bx2) - Math.max(bx1, ax1);
    let overLapY = Math.min(ay2, by2) - Math.max(by1, ay1);

    let overLapArea = Math.max(0, overLapX) * Math.max(0, overLapY);

    return (AreaOfRectangle1 + AreaOfRectangle2) - overLapArea;
}

let ax1 = -3;
let ay1 = 0;
let ax2 = 3;
let ay2 = 4;
let bx1 = 0;
let by1 = -1;
let bx2 = 9;
let by2 = 2;

console.log(solve(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2))

// O(1)