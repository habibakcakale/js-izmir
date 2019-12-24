let map = new Map();

map.set('1', 'String Key Value');   // a string key
map.set(1, 'Numeric Key Value');     // a numeric key
map.set(true, 'bool Key Value'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log(map.get(1)); // 'Numeric Key Value'
console.log(map.get('1')); // 'String Key Value'

// Unlike Objects which store keys as string, map can use different objects as key
let habib = { name: "habib" };
map.set(john, 21258536459)
let ada = { name: "ada" };
map.set(ada, 31558536719)
console.log(map.size); // 5


let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
console.log(set.size) // 3
set.forEach(function (value, key, thisArg) { //As set doesn't have key or index key is actually value
    console.log(arguments)
})