# BASICS

Built on top of promises and makes code easier to read

# WITH PROMISES

const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
]

Promise.all(urls.map(url => {
    return fetch(url).then(r => r.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log("error"))

.finally(): called regardless whether .then() works or the Promise errors and catches into an error. Usually doesn't receive an argument

# WITH ASYNC/AWAIT

const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url =>
            fetch(url).then(r => r.json())
        ))
        console.log("users", users);
        console.log("posts", posts);
        console.log("albums", albums);
    } catch (error) {
        console.log("oops", error);
    }
}

try {}: automatically runs whatever is inside of it
catch (error) {}: catches anything that might fail within the try block. Always receives an error as an argument

# FOR AWAIT OF

const getData2 = async function() {
    const arrayOfPromises = urls.map(url => fetch(url));
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data);
    }
}