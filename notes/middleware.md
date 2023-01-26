# WHAT IS MIDDLEWARE?

A routing and Middleware framework for handling the different routing of the webpage and it works between the request and response cycle

Gets executed after the server receives the request and before the controller actions send the response

Can be used to add logging and authentication functionality

Middleware can be chained from one to another, Hence creating a chain of functions that are executed in order

The next() function in the express is responsible for calling the next middleware function, if there is one

app.get(PATH, (req, res, next) => {}, (req, res) => {})