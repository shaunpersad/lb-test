"use strict";

const http = require("http");
const url = 'http://service-b:3000/resource';

function request() {

    console.log('trying...');

    http.get(url, res => {
        res.setEncoding('utf8');
        let body = '';
        res.on('data', data => {
            body += data;
        });
        res.on('end', () => {

            console.log('response:', body);
        });
    }).on('error', request);

}

request();