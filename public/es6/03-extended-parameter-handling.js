// default parameters for functions
function f(x, y = 7, z = 42) {
    return x + y + z
}
f(1) === 50

// rest parameters
// if you would not have rest parameters operator you would need to use arguments,
// skip the named arguments and splice the rest

/**
 * Format String with given arguments
 * @param {string} message message to Format
 * @param  {...any} args arguments
 */
String.format = function (message, ...args) {
    return message.replace(/{(\d+)}/g, (match, index) => {
        return typeof args[index] != "undefined" ? args[index] : match;
    })
}
var message = String.format("{0} is dead, but {1} is alive!", 'JScript', 'ECMAScript');
console.log(message) //JScript is dead, but ECMAScript is alive!

//spread operator
var params = ["hello", true, 7]
var other = [1, 2, ...params] // [ 1, 2, "hello", true, 7 ]    , equivelent to other.concat(params)
let [one, two, ...rest] = other;

//also works with function invocations
function f(x, y, ...a) {
    return (x + y) * a.length
}
console.log(`f(1, 2, ...params) === 9`, f(1, 2, ...params) === 9)

let person = {
    name: `Bruce`,
    surname: `Lee`
}
let hero = {
    ...person,
    abilities: [
        'The Dragon Flag.',
        'Catching Rice With Chopsticks.',
        'He Was Too Strong For Regular Heavy Bags.',
        'One - Fingered Pushups.',
        'The One - Inch Punch.',
        'You Literally Couldn\'t Punch Him.',
        'He Could Grab A Coin Out Of Your Hand, And Replace It With Another Coin.',
        'He Was Too Fast For Cameras Of The Time To Film]'
    ]
};
