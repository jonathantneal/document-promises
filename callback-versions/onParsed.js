export default c => !function d() {
	/c/.test(document.readyState) && document.body
	? document.removeEventListener("readystatechange", d) | c()
	: document.addEventListener("readystatechange", d)
}();
