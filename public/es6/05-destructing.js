
/**
 * Least-Squares fitting the points (x,y) to a line y : x -> a+b*x,\
 * returning its best fitting parameters as (a, b) tuple,
 * where a is the intercept and b the slope.
 * @param { {x:number[], y:number[]} }  x Predictor (independent),  y Response (dependent)
 */
function linest({ x, y }) {
    if (x.length != y.length)
        throw Error("Vector Lenght should be equal");
    if (x.length <= 1)
        throw new Error("Not enoguh sample");

    // First Pass: Mean (Less robust but faster than ArrayStatistics.Mean)
    let mx = 0.0;
    let my = 0.0;
    for (let i = 0; i < x.length; i++) {
        mx += x[i];
        my += y[i];
    }

    mx /= x.length;
    my /= y.length;

    // Second Pass: Covariance/Variance
    let covariance = 0.0, variance = 0.0;
    for (let i = 0; i < x.length; i++) {
        let diff = x[i] - mx;
        covariance += diff * (y[i] - my);
        variance += diff * diff;
    }

    var b = covariance / variance;
    return [my - b * mx, b];
}

let knownXes = [1, 2, 3, 4, 5, 6, 7]; //days
let knownYes = [18, 19, 19.9, 20.7, 21.5, 22.3, 23]; //earned values

let [a, b] = linest({ x: knownXes, y: knownYes })

console.log('prediction for 8th day', a + b * 8); //prediction for 8th day.

// two variable swap without temp variable
console.log(`before swap a:${a}, b:${b}`);
[b, a] = [a, b]
console.log(`after swap a:${a}, b:${b}`);
