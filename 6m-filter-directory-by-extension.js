'use strict';

const fs = require('fs');
const path = require('path');
module.exports = function(dirPath, fileExt, callback) {
	fs.readdir(dirPath, (err, files) => {	
		if (err) return callback(err);

		let filteredFiles = files.filter(filename => {
			return path.extname(filename) === `.${fileExt}`;
		});

		callback(null, filteredFiles);
	});
};
