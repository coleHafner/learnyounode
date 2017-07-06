'use strict';

const fs = require('fs');
const path = require('path');
const dirPath = process.argv[2];
const fileExt = `.${process.argv[3]}`;

fs.readdir(dirPath, (err, files) => {	
	files.forEach(filename => {
		// filename.indexOf(`.${fileExt}`) > -1 && console.log(filename);
		// console.log(`FILENAME: ${filename} ext: ${path.extname(filename)}`);
		path.extname(filename) === fileExt && console.log(filename);
	});
});
