const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    port: 3000 // El puerto que desees utilizar
  },
  transpileDependencies: true
})
