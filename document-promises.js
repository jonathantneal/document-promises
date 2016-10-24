(function () {
	function createPromise(property, type, readyState) {
		// define the property on the document constructor
		Object.defineProperty((window.Document || window.HTMLDocument).prototype, property, {
			get: function getter() {
				var document = this;

				// promise the document state using an event listener
				var promise = new Promise(function (resolve) {
					function handler() {
						if (readyState.test(document.readyState)) {
							document.removeEventListener(type, handler);

							resolve();
						}
					}

					document.addEventListener(type, handler);

					handler();
				});

				// override the property on the document
				Object.defineProperty(document, property, {
					value: promise
				});

				return promise;
			}
		});
	}

	createPromise('contentLoaded', 'DOMContentLoaded', /./);
	createPromise('interactive', 'readystatechange', /interactive/);
	createPromise('loaded', 'readystatechange', /complete/);
})();
