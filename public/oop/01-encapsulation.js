//@ts-check
// ES5 Factory Function and closures
function Stack() {
    let list = [];

    function push(value) { list.push(value); }
    function pop() { return list.pop(); }

    return Object.freeze({
        push,
        pop
    });
}

//trade off not using new keyword with constructor. instance of Stack will be false.
let stack = Stack();
stack.push(10)
stack.push(20)
stack.pop() // 20
stack.pop() // 10
stack.list

// WeakMaps
var Counter = (function () {
    let privateData = new WeakMap();
    function Counter(count) {
        privateData.set(this, { count })
    }
    Counter.prototype.increment = function () {
        return ++privateData.get(this).count
    }
    Counter.prototype.decrement = function () {
        return --privateData.get(this).count
    }

    Counter.prototype.value = function () {
        return privateData.get(this).count
    }
    return Counter;
})()

//Use of Symbols
var Hedgehog = (function () {
    const speed = Symbol(); // as no one will be able to access the speed symbol
                            // variable will not be accessible.
    function Hedgehog(name) {
        this.name = name; // public field
        this[speed] = 1000; // this is not directly accessible
    }
    Hedgehog.prototype.zoom = function () {
        console.log(`${this.name} zooms with the speed of ${this[speed]} miles per second!`);
    }

    return Hedgehog;
})();

let sonic = new Hedgehog('Sonic');
sonic.zoom();