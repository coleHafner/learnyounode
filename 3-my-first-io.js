'use strict';

const filename = process.argv[2];
const fs = require('fs');

let contents = fs.readFileSync(filename);
console.log(contents.toString().split('\n').length - 1);
