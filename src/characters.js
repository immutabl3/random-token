const numeric = '0123456789';
const alphaLower = 'abcdefghijklmnopqrstuvwxyz';
const alphaUpper = alphaLower.toUpperCase();
const wildcards = '-_';

module.exports = numeric + alphaLower + alphaUpper + wildcards;
