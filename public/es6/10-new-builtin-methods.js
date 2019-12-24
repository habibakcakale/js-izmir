// Object Property Assignment
function Training(opts) {
    let defaults = {
        participants: 15,
        location: `OSF Izmir`
    }
    let options = Object.assign(opts, defaults)
    console.log(options);
}

new Training({ title: `JS Izmir` })

//Array Element Finding
[1, 3, 4, 2].find(x => x > 3) // 4
[1, 3, 4, 2].findIndex(x => x > 3) // 2

// String Repeating
"-".repeat(4) // ----

// String Searching
"hello".startsWith("ello", 1) // true
"hello".endsWith("hell", 4)   // true
"hello".includes("ell")       // true
"hello".includes("ell", 1)    // true
"hello".includes("ell", 2)    // false

// Number type checking & Number Safety Checking
Number.isNaN(42) === false
Number.isNaN(NaN) === true

Number.isFinite(Infinity) === false
Number.isFinite(-Infinity) === false
Number.isFinite(NaN) === false
Number.isFinite(123) === true
Number.isSafeInteger(42) // true
Number.isSafeInteger(9007199254740992) === false

//Number Comparison
console.log(0.1 + 0.2 === 0.3) // false
console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON) // true

//Number truncation and Sign determination
console.log(Math.trunc(42.7)) // 42
console.log(Math.trunc( 0.1)) // 0
console.log(Math.trunc(-0.1)) // -0

console.log(Math.sign(7))   // 1
console.log(Math.sign(0))   // 0
console.log(Math.sign(-0))  // -0
console.log(Math.sign(-7))  // -1
console.log(Math.sign(NaN)) // NaN

