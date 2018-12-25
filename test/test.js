const keysInObject = require('../build/keysInObject');
const assert = require('assert');

const obj = {
	'a': 'test a',
	'b': 'test b',
	'c': {
		'c_a': true,
		'c_b': [1, 2, 3]
	},
	'e': {
		'c': 'Nested somewhere else'
	}
};

describe('keysInObject', function() {
	
	describe('Functionalities', function() {
		it('should return Array with values test_a', function() {
			assert.deepEqual(keysInObject(obj, 'a'), ['test a']);
		});
	
		it('should return Array with values object of "c" key', function() {
			assert.deepEqual(keysInObject(obj, 'c'), [{
				'c_a': true,
				'c_b': [1, 2, 3]
			}, 'Nested somewhere else']);
		});
	
		it('should return Array with length "2" for "c" key', function() {
			assert.equal(keysInObject(obj, 'c').length, 2);
		});
	
		it('should return empty Array for non existance key', function() {
			assert.deepEqual(keysInObject(obj, 'd'), []);
		});
	});
	
	describe('Errors', function() {

		it('should throw an Error when NOT passing Object', function() {			
			const results = function(){
				keysInObject(2, 'any');
			};
			assert.throws(results, Error, 'The variable is not an Object');		
		});

		it('should throw an Error when passing Undefined', function() {			
			const results = function(){
				keysInObject(undefined, 'any');
			};
			assert.throws(results, Error, 'The variable is undefined');		
		});

		it('should throw an Error when passing Empty Object', function() {			
			const results = function(){
				keysInObject({}, 'any');
			};
			assert.throws(results, Error, 'The variable is empty');		
		});

		it('should throw an Error when passing Array', function() {			
			const results = function(){
				keysInObject([], 'any');
			};
			assert.throws(results, Error, 'You are passing an Array');		
		});

	});	
	
});
