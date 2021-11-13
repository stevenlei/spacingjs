const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const PackageJSON = require('./package.json');
const ManifestJSON = require('./extensions/chrome/manifest.json');

const resolve = (dir) => path.resolve(__dirname, dir);
const versionReg = /(\d+\.\d+\.\d+)/g;
const currentVersion = PackageJSON.version;

build();
function build() {
  // build to chrome
  execSync(`cp dist/bundle.js extensions/chrome/bundle.js`);
  // sync version
  ManifestJSON.version = currentVersion;
  fs.writeFileSync(
    resolve('extensions/chrome/manifest.json'),
    JSON.stringify(ManifestJSON, null, 2),
    'utf8'
  );
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
