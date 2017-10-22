const fs = require('fs')
const moment = require('moment')

module.exports = function birthDate(path, format = undefined) {
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
		let formatted_birth_date = birth_date.toISOString()

		if(moment(birth_date).isValid){
			formatted_birth_date = moment(birth_date).format(format)

			return formatted_birth_date
		}
	}

	return birth_date
}
