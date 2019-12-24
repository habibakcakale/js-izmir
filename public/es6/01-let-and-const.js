let fib = [1, 1, 2, 3, 5, 8, 13, 21, 34];
let b = [];
for (let i = 0; i < fib.length; i++) {
  let x = fib[i];
}
// i variable not accessible in here after for loop
for (let j = 0; j < b.length; j++) {
  let y = b[j];
}

let callbacks = [];
for (let i = 0; i <= 2; i++) {
  callbacks[i] = function() {
    return i * 2;
  };
}
// console.log(i)
// Uncaught ReferenceError: i is not defined

callbacks[0]() === 0;
callbacks[1]() === 2;
callbacks[2]() === 4;
