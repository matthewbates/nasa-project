# ASYNCHRONOUS JAVASCRIPT

Information we don't have yet - we need to get it

-Web APIs
-Async/await
-Callbacks
-Job queue (microtask queue)
-HIGHER priority than the task queue
-ex: Promise.resolve()
-Callback queue (task queue)
-LOWER priority than the microtask queue
-ex: setTimeout()
-Promises
-Event loop

# PROMISES

An object that may produce a single value some time in the future

    Either a resolved value, or a reason that it's not resolved (rejected)

A promise can only succeed/fail once

3 types: fulfilled, rejected, or pending

# WITHOUT PROMISES

el.addEventListener("click", submitForm);

movePlayer(100, "Left", function() {
movePlayer(400, "Left", function() {
movePlayer(10, "Right", function() {
movePlayer(330, "Left", function() {

            });
        });
    });

});

# WITH PROMISES

movePlayer(100, "Left")
.then(() => movePlayer(400, "Left"));
.then(() => movePlayer(10, "Right"));
.then(() => movePlayer(330, "Left"));

# CREATING A NEW PROMISE

const promise = new Promise((resolve, reject) => {
if (true) {
resolve("Stuff worked");
} else {
reject("Error, it broke");
}
})

promise.then(result => console.log(result));

# EXAMPLE - https://jsonplaceholder.typicode.com

const urls = [
"https://jsonplaceholder.typicode.com/users",
"https://jsonplaceholder.typicode.com/posts",
"https://jsonplaceholder.typicode.com/albums",
]

Promise.all(urls.map(url => {
return fetch(url).then(r => r.json())
}))
.then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
})
.catch(() => console.log("error"))

(10) [{...}, {...}, {...}]
(100) [{...}, {...}, {...}]
(100) [{...}, {...}, {...}]
