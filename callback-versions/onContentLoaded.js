export default (c) => !function d() {
	document.body
	? document.removeEventListener("DOMContentLoaded", d) | c()
	: document.addEventListener("DOMContentLoaded", d)
}();
