# vue-cli-plugin-vconsole

[![npm version](https://img.shields.io/npm/v/vue-cli-plugin-vconsole.svg?style=flat-square)](https://www.npmjs.org/package/vue-cli-plugin-vconsole)
[![npm downloads](https://img.shields.io/npm/dm/vue-cli-plugin-vconsole.svg?style=flat-square)](http://npm-stat.com/charts.html?package=vue-cli-plugin-vconsole)

VConsole Plugin for vue-cli@3.0

## Install
``` Shell
vue add vconsole
```

## Tips
VConsole Plugin auto enable in the development environment.
You can use the options of the `vconsole-webpack-plugin` in the vue config like this:
``` JavaScript
// vue.config.js or configure in the pagckage.json.
module.exports = {
  pluginOptions: {
    vconsole: { enable: true /* others... */ }
  }
}
```