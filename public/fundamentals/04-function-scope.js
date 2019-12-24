var y = 10; //global scope
function A() {
    var x = 2; //function scope that are not accessible out of A
    function B() {
        return x * y; //still have acess to x and y because of scope chaining.
    }
    return B();
}
let result = A();
console.log(`Function acess global scope and parent scope and its result:`, result); //Expected result: 20

for (var i = 0; i < 20; i++) {
    setTimeout(function () {
        console.log(i); //fix this.
    });
}
console.log(i);
for (let j = 0; j < 20; j++) {
    setTimeout(function () {
        console.log(j);
    });
}
// below line will throw exception
// console.log(j);
// Uncaught ReferenceError: j is not define