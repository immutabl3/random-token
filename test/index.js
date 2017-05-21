const test = require('tape');
const isString = require('lodash/isString');
const uniq = require('lodash/uniq');
const token = require('../src');

test('characters', assert => {
	assert.ok(isString(token.characters), 'characters should be a string');
	assert.equal(token.characters.length, 64, 'should be 64 characters');
	assert.equal(uniq(token.characters.split('')).length, 64, 'all characters should be unique');

	assert.end();
});

test('token', assert => {
	assert.ok(isString(token()), 'token should be a string');
	assert.notEqual(token(), token(), 'two tokens should not equal eachother');
	assert.equal(token().length, 8, 'token should default to a length of 8');
	assert.equal(token(12).length, 12, 'token should be able to create longer tokens');
	assert.equal(token(4).length, 4, 'token should be able to create shorter tokens');

	assert.end();
});

test('valid', assert => {
	assert.notOk(token.valid(null), 'null should be invalid');
	assert.notOk(token.valid(undefined), 'undefined should be invalid');
	assert.notOk(token.valid(0), 'number should be invalid');
	assert.notOk(token.valid(NaN), 'NaN should be invalid');
	assert.notOk(token.valid(true), 'Boolean should be invalid');
	assert.notOk(token.valid([]), 'Array should be invalid');
	assert.notOk(token.valid({}), 'Object should be invalid');
	assert.notOk(token.valid(() => {}), 'function should be invalid');
	assert.notOk(token.valid(''), 'empty string should be invalid');
	assert.notOk(token.valid('     '), 'padded empty string should be invalid');
	assert.notOk(token.valid(' \n  \n  '), 'empty string with new lines should be invalid');
	assert.notOk(token.valid(';zz;'), 'token with invalid characters should fail');
	assert.notOk(token.valid('   ;zz;   '), 'passed token with invalid characters should fail');
	assert.ok(token.valid('aZ-_09'), 'valid token should be valid');
	assert.notOk(token.valid('aZ-_09', 7), 'valid token with invalid length should be invalid');

	assert.end();
});