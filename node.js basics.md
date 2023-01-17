# BASICS

Node.js is a way to run JavaScript instructions on the computer outside of the web browser

    Node.js was built so we could run JavaScript anywhere. Whenever you are running JavaScript outside of the browser, chances are you are running Node.js

Node.js only became possible because the Chrome team made the V8 engine open source

Prior to Node.js, JavaScript could only be run in a browswer because browsers were the only ones who had JavaScript engines

# FRONT-END VS. BACK-END

In the majority of cases, we use Node.js to create servers (build web/mobile applications) that connect to databases, provide user data, security features (allowing users to login), etc.

Node.js allows us to develop the back-end and front-end in the same language

# SYNCHRONOUS VS. ASYNCHRONOUS

Node.js allows JavaScript to run asynchronously utilizing non-blocking I/O

Synchronous: code that is executed line by line
    Blocking functions
Asynchronous: code that doesn't necessarily run line by line
    Non-blocking functions

# PROCESSES AND THREADS

Processes are containers that contain both code and threads. Processes create threads that represent a single sequence of operation

As a Node.js developer, you never have to worry about managing multiple threads

# THE EVENT LOOP

Responsible for handling callback functions in Node.js programs which subsequently allow Node.js to execute code asynchronously

while(!shouldExit) {
    processEvents();
}

Event Loop Phases:
1.) Timers
    -setTimeout(), setInterval(), setImmediate()
2.) I/O callbacks
    -Network/file operations
3.) setImmediate
    -Runs immedeiately after I/O operations have finished executing
4.) Close callbacks
    -When you close a file or network connection

# WHAT IS NODE.JS BEST AT?

Servers: talking to databases, coordinating with other servers (email, authentication, etc.), and serving data to I/O-heavy applications