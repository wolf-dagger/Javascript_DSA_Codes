let arr = [10, 45, 18, 9, 9, 10, 45, 10, 10];

let set = new Set();

for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
        set.delete(arr[i]);

    } else set.add(arr[i]);
}

console.log(set);