if (!document.loaded) {
	(function () {
		function documentPromise(type, readyState) {
			// promise an event has fired with a matching ready state
			return new Promise(function (resolve) {
				function listener() {
					if (readyState.test(document.readyState)) {
						document.removeEventListener(type, listener);

						resolve();
					}
				}

				document.addEventListener(type, listener);

				listener();
			});
		}

		// mdn ready states: loading, interactive, & complete
		// https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState
		// msdn ready states: uninitialized, loading, loaded, interactive, & complete
		// https://msdn.microsoft.com/en-us/library/ms534358(v=vs.85).aspx

		// document promises
		document.interactive = documentPromise('readystatechange', /r/);
		document.contentLoaded = documentPromise('DOMContentLoaded', /r|m/);
		document.loaded = documentPromise('readystatechange', /m/);
	})();
}
