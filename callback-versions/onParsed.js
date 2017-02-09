export default (c) => !function d() {
	document.body
	? document.removeEventListener("readystatechange", d) | c()
	: document.addEventListener("readystatechange", d)
}();
