const fs = require('fs')

module.exports = function birthDate(path) {
	if(!fs.existsSync(path)){
		throw new Error('File not found.')
	}


	console.log("got it")
}
