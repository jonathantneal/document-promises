export default (c) => !function d() {
	/c/.test(document.readyState) && document.body
	? document.removeEventListener("DOMContentLoaded", d) | c()
	: document.addEventListener("DOMContentLoaded", d)
}();
