# BASICS

Looks like route handlers, but uses a third parameter called next. this callback function has the opportunity to work with the req and use the data from it, then take some action before it reaches the route handlers

The next function is responsible for the order of execution of the middleware

app.use(function(req, res, next) {

})