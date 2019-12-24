// Make some objects
let jan = {
    name: `January`,
    days: 31
};
let feb = {
    name: "February",
    days: 28
};

let cache = new WeakMap();

function process(key) {
    // process : adds to Map collection and increments the value counter by map get method
    // Before that first check whether the object is there in map
    let value = cache.has(key) ? cache.get(key) + 1 : 1;
    cache.set(key, value);
    return value;
}

/* Now add key/value pair by calling the function cache */

process(jan);   // 1, Map(1), cache : {{...} => 1}
process(jan);  // 1, Map(1), cache : {{...} => 2}
process(feb);  //  2, Map(2), cache : {{...} => 2, {...} => 1};

// raman has gone
jan = null;
//first  object may still occupies the memory 
console.log(cache)
//but soon it will be removed by garbage collector.

setTimeout(((interval) => clearInterval(interval))(setInterval(() => {
    console.log(cache)
}, 1000)), 2000);