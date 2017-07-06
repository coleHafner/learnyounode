'use strict';

const dirPath = process.argv[2];
const fileExt = process.argv[3];
const filterDirectoryByExtension = require('./6m-filter-directory-by-extension');

filterDirectoryByExtension(dirPath, fileExt, (err, data) => {
	if(err) throw err;
	data.forEach(filename => {
		console.log(filename);
	});
});
	
