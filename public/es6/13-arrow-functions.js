`use strict`;

let aggregateFunction = (curr, prev) => curr + prev;
let sum = [...Array(100).keys()].map(item => item + 1).reduce(aggregateFunction)
console.log(sum, (100 * (1 + 100)) / 2) //5050 5050

//Duplicate Parameter handling
function f(first, second, first) {
    console.log(first, second);
}
f(`hello`, `world`) // undefined world
f(`hello`, `world`, `from izmir`) // from izmir world

// below function will throw error on compile time.
// let arrow = (first, second, first) => { console.log(first, second) };
// Uncaught SyntaxError: Duplicate parameter name not allowed in this context

//Arguments handling
function avarage() {
    const length = arguments.length;
    if (length == 0) return 0;
    return arguments.reduce(function (curr, next) {
        return curr + Number(next)
    }, 0) / length
}
// No arguments here, but rest parameter can be used.
let avarage = (...args) => {
    const length = args.length;
    if (length == 0) return 0;
    return arguments.reduce((curr, next) => curr + Number(next), 0) / length;
}

// Constructor Function
const Square = (length) => {
    this.length = length || 10
}
// below line will throw error on run time.
// let square = new Square()
// Uncaught TypeError: Square is not a constructor


function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.getFullName = () => `${this.name}  ${this.surname}`;
}
let person = new Person(`Yilmaz`, `Vural`);
console.log(person.getFullName()); `Yilmaz Vural`

let fullName = person.getFullName;
console.log(fullName.apply({ name: `habib`, surname: `akcakale` })) // Still prints `Yilmaz Vural`


