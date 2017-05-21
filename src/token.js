const characters = require('./characters');
const maxIndex = characters.length - 1;

const randomBetween = (min, max) => (
	Math.floor(Math.random() * (max - min + 1) + min)
);

const sample = () => (
	characters.charAt(randomBetween(0, maxIndex))
);

module.exports = function randomToken(len = 8) {
	let id = '';
	let length = len;
	while (length--) {
		id += sample();
	}
	return id;
};
