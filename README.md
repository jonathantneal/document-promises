# Document Promises

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Licensing][lic-image]][lic-url]
[![Changelog][log-image]][log-url]
[![Gitter Chat][git-image]][git-url]

[Document Promises] is a ponyfill for [document.interactive], [document.contentLoaded], and [document.loaded] which allow you to run code after specific states of the document.

```js
fetch('data.json').then(function (data) {
  document.interactive.then(function () {
    document.querySelectorAll('.username').textContent = data.username;
  });
});
```

### document.interactive

[document.interactive] is a promise that fulfills when the when the document's `readyState` becomes `interactive`.

### document.contentLoaded

[document.contentLoaded] is a promise that fulfills when the `DOMContentLoaded` event fires on the document.

### document.loaded

[document.loaded] is a promise that fulfills when the when the document's `readyState` becomes `complete`.

## Usage

[Document Promises] does not attach properties to the document by default, because no browsers have yet implemented this behavior.

Instead, developers may import the features individually.

```js
// Example ES6 import
import contentLoaded from 'document-promises';

// Example CommonJS import
require('document-promises').contentLoaded;
```

Developers may use the ponyfill as-is immediately.

```js
contentLoaded.then(function () {
  /* document is ready */
});
```

Developers may also polyfill the proposal at their own risk.

```js
document.contentLoaded = contentLoaded;
```

## FAQ

### What’s the difference between these promises and DOMContentLoaded?

Using promises for state transitions is much more [developer friendly].

### What’s the browser support?

[Document Promises] works all major 2014+ browsers, including Chrome 33+, Edge 12+, Firefox 29+, Opera 20+, Safari 7+, iOS 8+, and Android 4.4.4 & 53+. With [Promise] and [EventListener] polyfilled, support goes back to all major 2001+ browsers, including Chrome 1+, Firefox 1+, Internet Explorer 5+, iOS 1+, Netscape Navigator 6+, Opera 7+, Safari 1+, and Android 1+.

### What’s the catch?

[Document Promises] is [public domain], dependency free, and 236 bytes or less when minified and gzipped.

### Any known limitations?

If this polyfill runs in a script that uses `defer` then `contentLoaded` will resolve before the `DOMContentLoaded` event.

[Document Promises]: https://github.com/jonathantneal/document-promises

[document.interactive]: https://html.spec.whatwg.org/multipage/dom.html#dom-document-interactive
[document.contentLoaded]: https://html.spec.whatwg.org/multipage/dom.html#dom-document-contentLoaded
[document.loaded]: https://html.spec.whatwg.org/multipage/dom.html#dom-document-loaded

[developer friendly]: https://github.com/whatwg/html/issues/127#issuecomment-139176295

[Promise]: https://github.com/ysmood/yaku
[EventListener]: https://github.com/jonathantneal/EventListener
[public domain]: LICENSE.md

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
