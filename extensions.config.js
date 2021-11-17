const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const PackageJSON = require('./package.json');

const resolve = (dir) => path.resolve(__dirname, dir);
const versionReg = /(\d+\.\d+\.\d+)/g;
const currentVersion = PackageJSON.version;

build();
function build() {
  buildBrowserExtension('chrome');
  buildBrowserExtension('firefox');
  // pre build tampermonkey
  execSync(`rm -rf extensions/tampermonkey/spacingjs_*`);
  // concat content
  let header = fs.readFileSync(
    resolve('extensions/tampermonkey/header.js'),
    'utf8'
  );
  header.replace(versionReg, currentVersion);
  const bundle = fs.readFileSync(resolve('dist/bundle.js'), 'utf8');
  const script = header + '\r\n' + bundle;
  // write and prettier
  const target = `extensions/tampermonkey/spacingjs_${currentVersion}.js`;
  fs.writeFileSync(resolve(target), script, 'utf8');
  console.log('build complete!');
}

function buildBrowserExtension (target) {
  // Copy to browser extension directory
  execSync(`cp dist/bundle.js extensions/${target}/bundle.js`);
  
  // sync version
  const ManifestJSON = require(`./extensions/${target}/manifest.json`);
  ManifestJSON.version = currentVersion;
  fs.writeFileSync(
    resolve(`extensions/${target}/manifest.json`),
    JSON.stringify(ManifestJSON, null, 2),
    'utf8'
  );
}
