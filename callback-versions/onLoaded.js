export default (c) => !function d() {
	/m/.test(document.readyState)
	? document.removeEventListener("DOMContentLoaded", d) | c()
	: document.addEventListener("DOMContentLoaded", d)
}();
