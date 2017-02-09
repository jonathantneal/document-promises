export default (c) => !function d() {
	/c/.test(document.readyState)
	? document.removeEventListener("readystatechange", d) | c()
	: document.addEventListener("readystatechange", d)
}();
