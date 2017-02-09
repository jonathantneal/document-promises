export default (c) => !function d() {
	/c/.test(document.readyState)
	? document.removeEventListener("DOMContentLoaded", d) | c()
	: document.addEventListener("DOMContentLoaded", d)
}();
