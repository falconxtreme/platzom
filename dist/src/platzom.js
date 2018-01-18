"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;
function platzom(str) {
	var translation = str;

	if (str.toLowerCase().endsWith("ar")) {
		translation = str.slice(0, -2);
	}

	if (str.toLowerCase().startsWith("z")) {
		translation += "pe";
	}

	var length = translation.length;
	if (length >= 10) {
		var firstHalf = translation.slice(0, length / 2);
		var secondHalf = translation.slice(length / 2, length);
		translation = firstHalf + "-" + secondHalf;
	}

	var reverse = function reverse(str) {
		return str.toLowerCase().split('').reverse().join('');
	};

	var minMay = function minMay(str) {
		return str.split('').map(function (c) {
			return str.indexOf(c) % 2 == 0 ? c.toUpperCase() : c.toLowerCase();
		}).join('');
	};

	translation = str == reverse(str) ? minMay(str) : translation;

	return translation;
}