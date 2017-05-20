export default (c) => !function d() {
	/m/.test(document.readyState)
	? document.removeEventListener("readystatechange", d) | c()
	: document.addEventListener("readystatechange", d)
}();
