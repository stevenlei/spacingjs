# Spacing JS

[![npm version](https://img.shields.io/npm/v/spacingjs.svg)](https://www.npmjs.com/package/@stevenlei/spacingjs)
![GitHub Stars](https://img.shields.io/github/stars/stevenlei/spacingjs)
![Github Forks](https://img.shields.io/github/forks/stevenlei/spacingjs)
![GitHub Open Issues](https://img.shields.io/github/issues/stevenlei/spacingjs)
![License](https://img.shields.io/github/license/stevenlei/spacingjs)

A lightweight JavaScript utility for measuring spacing between elements on webpages during development. Perfect for designers and developers who need precise measurements. [Try the demo](https://spacingjs.com).

![SpacingJS Demo](screenshot.png)

🌍 Available in: [English](README.md) | [繁體中文](README.zh-Hant.md) | [简体中文](README.zh-Hans.md)

## Installation

### Option 1: CDN

Add SpacingJS directly to your HTML:

```html
<!-- Using UNPKG -->
<script src="//unpkg.com/spacingjs" defer></script>

<!-- Or using jsDelivr -->
<script src="//cdn.jsdelivr.net/npm/spacingjs" defer></script>
```

### Option 2: NPM

```bash
npm install spacingjs
```

Then import and use it in your code:

```javascript
import Spacing from 'spacingjs';

Spacing.start();
```

## Usage

1. Hover over any element on your webpage
2. Press <kbd>Alt</kbd> (Windows) or <kbd>⌥ Option</kbd> (Mac)
3. Move your cursor to another element to see the measurements

### Pro Tips
- Hold <kbd>Shift</kbd> to keep measurements visible longer (great for taking screenshots)
- Use the [Chrome Extension](https://chrome.google.com/webstore/detail/spacingjs/fhjegjndanjcamfldhenjnhnjheecgcc) for permanent access on any website

## Browser Extension

SpacingJS is available as a Chrome Extension:
- 🚀 [Install from Chrome Web Store](https://chrome.google.com/webstore/detail/spacingjs/fhjegjndanjcamfldhenjnhnjheecgcc)
- 🛠️ Build it yourself: Run `npm run ext`

## Contributing

The `dist` folder is intentionally included in the Git repository to ensure CDN reliability. To contribute:

1. Make your changes in the `src` directory
2. Run `npm run build` to rebuild the distribution files
3. Commit both source changes and rebuilt dist files
4. Submit a pull request

### Get Involved
- 🐛 Report bugs: [GitHub Issues](https://github.com/stevenlei/spacingjs/issues)
- 💡 Share ideas: [GitHub Discussions](https://github.com/stevenlei/spacingjs/discussions)
- ⭐ Star the repo if you find it useful!

## License

SpacingJS is released under the [MIT License](LICENSE).
