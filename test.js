var chai = require('chai');
const chai = require('chai')
const expect = chai.expect

const calculator = require('./add.js');
const prompt = require("prompt-sync")({ sigint: true});
const a = prompt("enter first number : ");
const b = prompt("enter second number : ");

describe('Condition', () => {
	describe('Addition', () => {
		it('Additon of two numbers', () => {
			let result=calculator.add(a, b)
			expect(calculator.add(a, b)).to.equal(result)
			console.log(result);
		})


    describe('Subtraction', () => {
        it('substraction of two numbers ', () => {
			let result=calculator.subtract(a, b)
            expect(calculator.subtract(a, b)).to.equal(result)
			console.log(result);
        })
})
	})

})
