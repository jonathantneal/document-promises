# Document Promises

[![Join the chat at https://gitter.im/jonathantneal/document-promises](https://badges.gitter.im/jonathantneal/document-promises.svg)](https://gitter.im/jonathantneal/document-promises?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Licensing][lic-image]][lic-url]
[![Changelog][log-image]][log-url]
[![Gitter Chat][git-image]][git-url]

[Document Promises] is a polyfill for [document.interactive], [document.contentLoaded], and [document.loaded] which allow you to run code during different loading states of a document.

### document.interactive

[document.interactive] is a promise that fulfills when the when a document's `readyState` becomes `"interactive"`.

### document.contentLoaded

[document.contentLoaded] is a promise that fulfills when the DOMContentLoaded event fires on a document.

### document.loaded

[document.loaded] is a promise that fulfills when the when a document's `readyState` becomes `"complete"`.

---

This polyfill is [licensed CC0-1.0], and minified and gzipped it is 257 bytes.

[Document Promises]: https://github.com/jonathantneal/document-promises
[document.interactive]: https://html.spec.whatwg.org/multipage/dom.html#dom-document-interactive
[document.contentLoaded]: https://html.spec.whatwg.org/multipage/dom.html#dom-document-contentLoaded
[document.loaded]: https://html.spec.whatwg.org/multipage/dom.html#dom-document-loaded
[licensed CC0-1.0]: LICENSE.md

[npm-url]: https://www.npmjs.com/package/document-promises
[npm-img]: https://img.shields.io/npm/v/document-promises.svg?style=flat-square
[cli-url]: https://travis-ci.org/jonathantneal/document-promises
[cli-img]: https://img.shields.io/travis/jonathantneal/document-promises.svg?style=flat-square
[lic-url]: LICENSE.md
[lic-image]: https://img.shields.io/npm/l/document-promises.svg?style=flat-square
[log-url]: CHANGELOG.md
[log-image]: https://img.shields.io/badge/changelog-md-blue.svg?style=flat-square
[git-url]: https://gitter.im/jonathantneal/document-promises
[git-image]: https://img.shields.io/badge/chat-gitter-blue.svg?style=flat-square
