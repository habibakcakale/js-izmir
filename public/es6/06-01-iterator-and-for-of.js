
// the problem in here is actually index is the key of array and it is string
// actually it will be array[01], array[11]

let array = [1, 2, 3, 4, 5];
for (const index in array) {
    const element = array[index];
    let next = array[index + 1];
    console.log(`current element ${index}=${element}, next element ${index + 1} = ${next}`)
}

for (const element of array) { //loop through elements defined with iterator
    console.log(element);
}

function Counter(counter = 10) {
    this[Symbol.iterator] = function () {
        return {
            next() {
                if (counter--) {
                    return { value: counter }
                }
                return { done: true }
            }
        }
    }
}

for (const value of new Counter(10)) {
    console.log(value)
}
