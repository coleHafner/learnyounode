'use strict';

const filename = process.argv[2];
const fs = require('fs');

fs.readFile(filename, (err, contents) => {
	console.log(contents.toString().split('\n').length - 1);
});
