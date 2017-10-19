"use strict";

const http = require('http');
const port = 3000;
const id = Math.ceil(Math.random() * 100);

const requestHandler = (request, response) => {
    console.log(request.url);
    response.end(`Hello from service b, instance ${id}`);
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
});
