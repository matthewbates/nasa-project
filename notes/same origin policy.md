# WHAT IS AN ORIGIN?

Combination of three things: protocol (http/https), host (www.google.com), port (the port your browser assumes your using when your using https)

Under the SOP, your browser allows all requests from the same origin as the page that you've loaded in your browser

The browswer restricts requests from different origins than the site you're currently browsing

Keeps users browsing the web secure while also allowing them to make the requests they need to browse the internet and visit websites that aren't trying to steal their data

Say you're browsing a page on www.wikipedia.org. In general, will the following requests succeed, or fail?

1.) A JavaScript GET request to www.bank.com
    -FAIL: requests to get info from a cross-origin domain are not allowed by the browser

2.) A JavaScript POST request to www.bank.com
    -SUCCEED: POST requests are used to write data to a server, rather than GET data from it, so it's less likely the response will contain private information

3.) Clicking an HTML link to a video on www.bank.com
    -SUCCEED: the SOP applies only to scripts and not static resources like HTML tags

# CORS (Cross Origin Resource Sharing)

A way of relaxing the restrictions that the SOP puts on developers so that we can make applications that potentially spans many different domains/origins