// thenfied document ready states
const thenify = (type, readyState) => new Promise(resolve => {
	const listener = () => {
		if (readyState.test(document.readyState)) {
			document.removeEventListener(type, listener);

			resolve();
		}
	};

	document.addEventListener(type, listener);

	listener();
});

// export thenfied parsed, contentLoaded, and loaded
export const parsed        = thenify('readystatechange', /^(?:interactive|complete)$/);
export const contentLoaded = thenify('DOMContentLoaded', /^(?:interactive|complete)$/);
export const loaded        = thenify('readystatechange', /^complete$/);
