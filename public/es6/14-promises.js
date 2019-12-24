let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([
            { "id": 1, "displayName": "Press Inc", "platform": 2 },
            { "id": 2, "displayName": "Gym Flip", "platform": 1 },
            { "id": 3, "displayName": "MVP Stars", "platform": 1 },
            { "id": 4, "displayName": "Hunter Assassin!", "platform": 1 },
            { "id": 5, "displayName": "Gym Flip", "platform": 2 },
            { "id": 6, "displayName": "Temp App", "platform": 1 },
            { "id": 7, "displayName": "Conquer.io", "platform": 1 },
            { "id": 8, "displayName": "Color Around", "platform": 1 },
            { "id": 9, "displayName": "Press Inc", "platform": 1 },
            { "id": 10, "displayName": "Drink Inc", "platform": 1 }
        ])
    }, 10000)
})
console.log(promise)
// one can chaing then and catch blocks
promise
    .then((response) => {
        console.log(response)
        return response.map(item => item.displayName);
    })
    .then(displayNames => console.log(displayNames))
    .catch(err => console.log(err))
    .finally(() => console.log(`Done with fetching the games.`))

//chaining
new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000); // (*)
}).then(function (result) { // (**)
    console.log(`Chain Promise result`, result); // 1
    return result * 2;
}).then(function (result) { // (***)
    console.log(`Chain Promise result`, result); // 2
    return result * 2;
}).then(function (result) {
    console.log(`Chain Promise result`, result); // 4
    return result * 2;
});

let userPosts = fetch({
    url: 'https://jsonplaceholder.typicode.com/users',
}).then(response => response.json()).then((users) => {
    console.log(users);
    return fetch(`https://jsonplaceholder.typicode.com/users/${users[0].id}/posts`).then(response => response.json())
}).then(console.log)