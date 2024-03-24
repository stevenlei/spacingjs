# Spacing JS

[![npm
version](https://img.shields.io/npm/v/spacingjs.svg)](https://www.npmjs.com/package/@stevenlei/spacingjs)
![GitHub Stars](https://img.shields.io/github/stars/stevenlei/spacingjs)
![Github Forks](https://img.shields.io/github/forks/stevenlei/spacingjs)
![GitHub Open Issues](https://img.shields.io/github/issues/stevenlei/spacingjs)
![License](https://img.shields.io/github/license/stevenlei/spacingjs)

A JavaScript utility for measuring the spacing between elements on webpage. This
is supposed to be used during development only. [Try this
out](https://spacingjs.com).

![](screenshot.png)

Read this document in other languages: [English](README.md), [繁體中
文](README.zh-Hant.md), [简体中文](README.zh-Hans.md).

## Usage

### Import from CDN

Include Spacing.js with `<script>` tag in your HTML page:

```html
<!-- Use `UNPKG' CDN. --->
<script src="//unpkg.com/spacingjs" defer></script>

<!-- Or, use `jsDeliver` CDN. -->
<script src="//cdn.jsdelivr.net/npm/spacingjs" defer></script>
```

### Import in source code

```javascript
import Spacing from 'spacingjs';

Spacing.start();
```

### Front end usage

1. Move your mouse cursor to an element, and press <kbd>Alt</kbd> on Windows or
   <kbd>⌥ Option</kbd> on a Mac.

2. Move your mouse cursor to another element, the measurement results will be
   there.

## More Options

Hold down with <kbd>Shift</kbd> key will delay the dismiss of measurement
results, so that we can take a screenshot easier.

## Chrome Extension & Tampermonkey version

You can install the Chrome Extension version on the [Chrome web
store](https://chrome.google.com/webstore/detail/spacingjs/fhjegjndanjcamfldhenjnhnjheecgcc),
or build on your own with `npm run ext`.

## Contribute

Feel free to fork this repository and submit pull requests. Bugs report in
[GitHub Issues](https://github.com/stevenlei/spacingjs/issues),
features/ideas/questions discuss in [GitHub
Discussions](https://github.com/stevenlei/spacingjs/discussions).

## License

Spacing.js is [MIT Licensed](LICENSE).
