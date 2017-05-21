const rInvalidCharacters = /[^a-zA-Z0-9\-_]/g;

module.exports = function valid(param = '') {
	// check if the param is a string
	if (typeof param !== 'string') return false;

	// check for empty strings
	const str = param.trim();
	if (!str.length) return false;

	return str === str.replace(rInvalidCharacters, '');
};