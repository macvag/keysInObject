// Variable to store key's values
let result = [];

/**
 * Main function Entry that returns the result 
 * @param {Object} object 
 * @param {string} key 
 * @returns {Array}
 */
export default function searchForKeys(object, key) {
	// Check for possible errors
	checkObjectForErrors(object);
	findRecursiveInObject(object, key);
	const arrayToReturn = result;
	result = [];
	if (!arrayToReturn.length) {
		return [];
	} else {
		return arrayToReturn;
	}
}
/**
 * Seach for the key in Object recursively
 * @param {Object} object 
 * @param {string} key 
 */
function findRecursiveInObject(object, key) {	
	for (var prop in object) {
		if (object[key] === object[prop]) {
			result.push(object[prop]);
		} else {
			// If nested object go deeper
			if (typeof object[prop] === 'object') {
				findRecursiveInObject(object[prop], key);
			}
		}
	}
}
/**
 * Check for possible errors in provided Object
 * @param {Object} object 
 */

function checkObjectForErrors(object) {
	if (typeof object !== 'object') {
		throw new Error('The variable is not an Object');
	} else if (object === undefined) {
		throw new Error('The variable is undefined');
	} else if (JSON.stringify(object) === '{}') {
		throw new Error('The variable is empty');
	} else if (Array.isArray(object)) {
		throw new Error('You are passing an Array');
	}
}
