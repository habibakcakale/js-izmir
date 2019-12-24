//@ts-check
const customer = { name: "Foo" }
const card = { amount: 7, product: "Bar", unitprice: 42 }

var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`

console.log(message);

let quux = '//\\', bar = '%5==3', baz = '{}';
function encodeParams(parts, ...args) {
    console.log(parts)
    return parts.reduce((prev, element, index) => prev + element + encodeURIComponent(args[index] || ''), '');
}

let taggedTemplateResult = encodeParams`http://example.com/foo?bar=${bar + baz}&quux=${quux}`
console.log(taggedTemplateResult); //http://example.com/foo?bar=%255%3D%3D3%7B%7D&quux=%2F%2F%5C

