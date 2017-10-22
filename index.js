const fs = require('fs')
const moment = require('moment')

const birthDate = function(path, format = undefined) {
	if(!fs.existsSync(path)){
		throw new Error('File not found.')
	}

	const file_data = fs.statSync(path)
	const birth_date = file_data.birthtime || file_data.ctime

	if(!birth_date){
		throw new Error('File\'s creation date not found.')
	}

	if(format){
		format = format.toUpperCase()
		let formatted_date = birth_date.toISOString()
		formatted_date = moment(formatted_date).format(format)

		return formatted_date
	}

	return birth_date
}

module.exports = birthDate