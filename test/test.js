const keysInObject = require('../build/keysInObject');
const assert = require('assert');

const users = {
	id_1: {
		name: 'John Doe',
		emain: 'johndoe@test.com'
	},
	id_2: {
		name: 'Hohn Moe',
		emain: 'hohnmoe@test.com'
	},
	id_3: {
		name: 'Joon Doo',
		emain: 'joondoo@test.com'
	},
	id_4: {
		name: 'Johnny Foe',
		emain: 'johnnyfoe@test.com'
	},
};

describe('keysInObject', function () {

	describe('Functionalities', function () {
		it('should return Array with nested object of "id_1"', function () {
			assert.deepEqual(keysInObject(users, 'id_1'), [{
				name: 'John Doe',
				emain: 'johndoe@test.com'
			}]);
		});

		it('should return Array with values object of "name" key', function () {
			assert.deepEqual(keysInObject(users, 'name'), ['John Doe', 'Hohn Moe', 'Joon Doo', 'Johnny Foe']);
		});

		it('should return Array with length "4" for "name" key', function () {
			assert.equal(keysInObject(users, 'name').length, 4);
		});

		it('should return empty Array for non existance key', function () {
			assert.deepEqual(keysInObject(users, 'id_5'), []);
		});
	});

	describe('Errors', function () {

		it('should throw an Error when NOT passing Object', function () {
			const results = function () {
				keysInObject(2, 'any');
			};
			assert.throws(results, Error, 'The variable is not an Object');
		});

		it('should throw an Error when passing Undefined', function () {
			const results = function () {
				keysInObject(undefined, 'any');
			};
			assert.throws(results, Error, 'The variable is undefined');
		});

		it('should throw an Error when passing Empty Object', function () {
			const results = function () {
				keysInObject({}, 'any');
			};
			assert.throws(results, Error, 'The variable is empty');
		});

		it('should throw an Error when passing Array', function () {
			const results = function () {
				keysInObject([], 'any');
			};
			assert.throws(results, Error, 'You are passing an Array');
		});

	});

});
