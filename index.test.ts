const Yup = require('yup')
require('./dist/yup-personnummer.cjs.js')

const pins = [
	{ pin: 190905271474, valid: true },
	{ pin: 201509160006, valid: false },
]

it('properly validates numbers', () => {
	const schema = Yup.number().personnummer().required()
	pins.forEach(({ pin, valid }) => {
		expect(schema.isValidSync(pin)).toBe(valid)
	})
})

it('properly validates strings', () => {
	const schema = Yup.string().personnummer().required()
	pins.forEach(({ pin, valid }) => {
		expect(schema.isValidSync(pin.toString())).toBe(valid)
	})
})

it('allows custom error messages', () => {
	const schema = Yup.number().personnummer('very bad').required()
	expect(() => {
		schema.validateSync(pins[1].pin.toString())
	}).toThrow('very bad')
})
