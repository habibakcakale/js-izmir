// property name short hand
let x = 5, y = 10
let point = {
    x,
    y,
    fromOrigin() { // no need to define like this -> fromOrigin = function() { } 
        Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    }
} // instead of  { x: x, y: y } 
console.log(point)

// computed property names
let param = 'SIZE'
let config = {
    [param]: 12,
    ['mobile' + param.charAt(0).toUpperCase() + param.slice(1).toLowerCase()]: 4
}
console.log('config ', config)