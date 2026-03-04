let map = new Map();

map.set("wolf", 5);
map.set("amit", 8);
map.set("vipul", 6);
map.set("prashant", 4);
map.set("amit", 3);


console.log(map)

map.delete("amit");

console.log(map);

console.log(map.has("wolf"));

console.log(map.size);

// for (let [key, value] of map) {
//     console.log(key + ": " + value);
// }

for (let key of map.keys()) {
    console.log(key);
}
for (let value of map.values()) {
    console.log(value);
}