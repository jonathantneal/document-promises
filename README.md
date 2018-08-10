# Document Promises [<img src="https://jonathantneal.github.io/dom-logo.svg" alt="PostCSS" width="90" height="90" align="right">][Document Promises]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Licensing][lic-img]][lic-url]
[![Support Chat][git-img]][git-url]

[Document Promises] is a ponyfill for [document.parsed],
[document.contentLoaded], and [document.loaded] which allow you to run code
after specific states of the document.

```js
import { parsed } from 'document-promises';

fetch('data.json').then(data => {
  parsed.then(() => {
    document.querySelectorAll('.username').textContent = data.username;
  });
});
```

[Document Promises]  has multi-implementer interest and tests, but is not yet a
standard due to
[implementers not actually prioritizing it highly enough].

### document.parsed

[document.parsed] is a promise that fulfills when the document is parsed and
`readyState` is `interactive`, before deferred and async scripts have run.

### document.contentLoaded

[document.contentLoaded] is a promise that fulfills when the document is
parsed, blocking scripts have completed, and `DOMContentLoaded` fires.

### document.loaded

[document.loaded] is a promise that fulfills when the document is parsed,
blocking scripts have completed, images, scripts, links and sub-frames have
finished loading, and `readyState` is `complete`.

## Usage

Because [Document Promises] is a ponyfill, it does not attach `parsed`,
`contentLoaded` or `complete` to the `document` by default. Instead, developers
are encouraged to import the features individually.

```js
import { contentLoaded } from 'document-promises';

// CommonJS example
const contentLoaded = require('document-promises').contentLoaded;
```

Developers may use the ponyfill as-is.

```js
contentLoaded.then(() => {
  /* document is ready */
});
```

Developers are strongly advised not to attach these promises to `document`, as
the standard may still change substantially, and then such code would be
future-incompatible.

## FAQ

### What’s the difference between these promises and DOMContentLoaded?

One might easily miss an event like `DOMContentLoaded` if a script fires late,
whereas a promise like `contentLoaded` guarantees the code will execute.
Furthermore, using promises for state transitions is much more
[developer friendly].

### What’s the browser support?

[Document Promises] works all major 2014+ browsers, including Chrome 33+,
Edge 12+, Firefox 29+, Opera 20+, Safari 7+, iOS 8+, and Android 4.4.4 & 53+.
With [Promise] and [EventListener] polyfilled, support goes back to all major
2001+ browsers, including Chrome 1+, Firefox 1+, Internet Explorer 5+, iOS 1+,
Netscape Navigator 6+, Opera 7+, Safari 1+, and Android 1+.

### What’s the catch?

[Document Promises] is [public domain], dependency free, and 252 bytes or less
when minified and gzipped.

### Are there known limitations?

Yes, if this polyfill runs in a script that uses `defer` then `contentLoaded`
will resolve before the `DOMContentLoaded` event.

### Can this be done without a library?

Yes, if something needs to run once the document has reached a certain state, one of the following micro-optimized functions will suffice.

```js
// callback once the document is parsed (119 bytes minified/gzipped)
!function d() {
  /c/.test(document.readyState) && document.body
  ? document.removeEventListener("readystatechange", d) | /* callback */
  : document.addEventListener("readystatechange", d)
}()
```

```js
// callback once the document is content loaded (120 bytes minified/gzipped)
!function d() {
  /c/.test(document.readyState) && document.body
  ? document.removeEventListener("DOMContentLoaded", d) | /* callback */
  : document.addEventListener("DOMContentLoaded", d)
}()
```

```js
// callback once the document is fully loaded (112 bytes minified/gzipped)
!function d() {
  /m/.test(document.readyState)
  ? document.removeEventListener("readystatechange", d) | /* callback */
  : document.addEventListener("readystatechange", d)
}()
```

For convenience, each of these callback versions are available as modules.

```js
import onParsed from 'document-promises/callback-versions/onParsed';

onParsed(() => {
  // do something on parsed
});
```

[Document Promises]: https://github.com/jonathantneal/document-promises

[document.parsed]: https://html.spec.whatwg.org/multipage/dom.html#dom-document-parsed
[document.contentLoaded]: https://html.spec.whatwg.org/multipage/dom.html#dom-document-contentLoaded
[document.loaded]: https://html.spec.whatwg.org/multipage/dom.html#dom-document-loaded

[developer friendly]: https://github.com/whatwg/html/issues/127#issuecomment-139176295

[Promise]: https://github.com/ysmood/yaku
[EventListener]: https://github.com/jonathantneal/EventListener
[public domain]: LICENSE.md

[npm-url]: https://www.npmjs.com/package/document-promises
[npm-img]: https://img.shields.io/npm/v/document-promises.svg
[cli-url]: https://travis-ci.org/jonathantneal/document-promises
[cli-img]: https://img.shields.io/travis/jonathantneal/document-promises/master.svg
[lic-url]: LICENSE.md
[lic-img]: https://img.shields.io/npm/l/document-promises.svg
[git-url]: https://gitter.im/jonathantneal/document-promises
[git-img]: https://img.shields.io/badge/support-chat-blue.svg

[implementers not actually prioritizing it highly enough]: https://github.com/whatwg/dom/issues/568#issuecomment-363633336
