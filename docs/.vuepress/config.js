const path = require("path");

module.exports = {
  title: "Gyumin's blog",
  description: "Gyumin's blog",
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons'}],
  ],
  chainWebpack: (config, isServer) => {
    config.resolveLoader.modules.add(path.resolve(__dirname, "./node_modules"));
  },
  themeConfig: {
    nav: [{ text: "Home", link: "/" }, { text: "About", link: "/about/" }]
  }
};
