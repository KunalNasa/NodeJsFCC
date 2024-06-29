const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url == '/')
    {
        res.end("welcome to our home page");
    }
    if(req.url == '/about')
    {
        res.end("Welcome to about page");
    }

    res.end(`
    <h1>OOPS!! page not found</h1>
    <a href = "/"> back to home page </a>`);

    // res.write("welcome to our home page");
    // res.end();
});



server.listen(5000);