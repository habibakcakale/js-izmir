function* simpleGenerator() {
    yield 15;
    yield 20;
    yield 30;
}
for (let item of simpleGenerator())
    console.log(item)

let treeIterator = (function () {
    function* preorder() {
        yield this.value;
        if (this.left) {
            for (let value of preorder.apply(this.left)) {
                yield value;
            }
        }
        if (this.right) {
            for (const value of preorder.apply(this.right)) {
                yield value;
            }
        }
    }
    function* postorder() {
        if (this.left) {
            for (let value of postorder.apply(this.left)) {
                yield value;
            }
        }
        if (this.right) {
            for (const value of postorder.apply(this.right)) {
                yield value;
            }
        }
        yield this.value;
    }
    function* inorder() {
        if (this.left) {
            for (let value of inorder.apply(this.left)) {
                yield value;
            }
        }
        yield this.value;
        if (this.right) {
            for (const value of inorder.apply(this.right)) {
                yield value;
            }
        }

    }
    return function (node, type = 'inorder') {
        switch (type) {
            case 'preorder':
                return {
                    [Symbol.iterator]: preorder.bind(node)
                }
            case 'postorder':
                return {
                    [Symbol.iterator]: postorder.bind(node)
                }
            case 'inorder':
            default:
                return {
                    [Symbol.iterator]: inorder.bind(node)
                }

        }
    }
})()
let tree = {
    value: 10,
    left: {
        value: 6,
        left: {
            value: 5
        },
        right: {
            value: 7
        }
    },
    right: {
        value: 20,
        left: {
            value: 15
        }
    }
}
console.log(`In Order`)
for (const value of treeIterator(tree)) {
    console.log(value)
}
console.log(`Post Order`)
for (const value of treeIterator(tree, `postorder`)) {
    console.log(value)
}
console.log(`Pre Order`)
for (const value of treeIterator(tree, `preorder`)) {
    console.log(value)
}