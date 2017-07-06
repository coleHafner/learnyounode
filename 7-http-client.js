'use strict';

const url = process.argv[2];
const http = require('http');

http.get(url, res => {
	res.setEncoding('utf8');
	res.on('error', console.log);
	res.on('data', console.log);
})
.on('error', console.log);
