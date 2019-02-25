'use strict';

module.exports = (func, wait, immediate) => {
	wait = wait || 250;
	let timeout;
	return function() {
		const context = this;
		const args = arguments;

		const later = () => {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
