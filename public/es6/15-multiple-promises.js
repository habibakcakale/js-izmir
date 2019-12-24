let postsPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());
let usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());

Promise.all([postsPromise, usersPromise]).then(([posts, users]) => {
    console.log(`Posts`, posts)
    console.log(`Users`, users)
})

usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
postsPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());
Promise.race([postsPromise, usersPromise]).then(response => console.log(`who knows which one resolved first`, response))

