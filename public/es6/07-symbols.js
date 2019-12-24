

//Symbol is not a constructor function, will throw an exception on new Symbol()
Symbol("foo") !== Symbol("foo")

const uniqueProp = Symbol('uniqueProp') // description parameter is for debuging purpose
typeof uniqueProp === "symbol"

let magician = {}
magician[uniqueProp] = "unusual magic happening."

JSON.stringify(obj) // {}

Object.keys(obj) // []
Object.getOwnPropertyNames(obj) // []
Object.getOwnPropertySymbols(magician) // [Symbol(uniqueProp)]
Object.getOwnPropertySymbols(Array.prototype) // [Symbol(Symbol.iterator), Symbol(Symbol.unscopables)]

//global symbols can be defined with Symbol.for
Symbol.for(`app.state`) === Symbol.for(`app.state`) // true
Symbol.keyFor(`app.state`) //If not exists it will return undefined.