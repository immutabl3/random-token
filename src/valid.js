const rInvalidCharacters = /[^a-zA-Z0-9\-_]/g;

module.exports = function valid(param = '', length) {
	// check if the param is a string
	if (typeof param !== 'string') return false;

	// check for empty strings
	const str = param.trim();
	if (!str.length) return false;

	const cleanString = str.replace(rInvalidCharacters, '');

	const isLengthCorrect = length !== undefined ?
		str.length === length : 
		true;

	return str === cleanString && isLengthCorrect;
};