let promisify = (type, readyState) => {
	return new Promise((resolve) => {
		let listener = () => {
			if (readyState.test(document.readyState)) {
				document.removeEventListener(type, listener);

				resolve();
			}
		};

		document.addEventListener(type, listener);

		listener();
	});
};

export let interactive = promisify('readystatechange', /^(?:interactive|complete)$/);
export let contentLoaded = promisify('DOMContentLoaded', /^(?:interactive|complete)$/);
export let loaded = promisify('readystatechange', /^complete$/);
