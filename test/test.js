const birthDate = require('..')
const assert = require('assert')
const chai = require('chai')
const expect = chai.expect

describe('birth-file', function() {

    it('should throw an error when file not found', function() {
     	expect(() => birthDate('./yeaaah.js')).to.throw()
    })
    it('should return file\'s creation date', function() {
    	const date = birthDate('./test/stapler.png')
    	const expected_result = new Date('2017-05-18T15:42:00.000Z')
     	expect(date).to.eql(expected_result)
    })
    it('should return file\'s creation date in format DD/MM/YYYY', function() {
    	const date = birthDate('./test/stapler.png', 'dd/mm/yyyy')
     	expect(date).to.eql('18/05/2017')
    })
    it('should return file\'s creation date in format DD/M', function() {
    	const date = birthDate('./test/stapler.png', 'dd/m')
     	expect(date).to.eql('18/5')
    })
    it('should return file\'s creation date in format yyyy/m/d', function() {
    	const date = birthDate('./test/stapler.png', 'yyyy/m/d')
     	expect(date).to.eql('2017/5/18')
    })
})
