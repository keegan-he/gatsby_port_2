module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Keegan Helmbrecht Portfolio","short_name":"kh portfolio","start_url":"/","background_color":"#ffcb05","theme_color":"#ffcb05","display":"minimal-ui","icon":"src/assets/images/website-icon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"71893a5e20205e8ddce3b6efa69528d4"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
