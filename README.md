# vue-cli-plugin-vconsole
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