const promisify = (type, readyState) => {
	return new Promise((resolve) => {
		const listener = () => {
			if (readyState.test(document.readyState)) {
				document.removeEventListener(type, listener);

				resolve();
			}
		};

		document.addEventListener(type, listener);

		listener();
	});
};

export const interactive = promisify('readystatechange', /^(?:interactive|complete)$/);
export const contentLoaded = promisify('DOMContentLoaded', /^(?:interactive|complete)$/);
export const loaded = promisify('readystatechange', /^complete$/);
