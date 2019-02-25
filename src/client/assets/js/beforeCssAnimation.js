'use strict';

module.exports = (element, callback) => {
	if (!element || !callback) return;
	element.addEventListener('animationend', () => callback());
};
