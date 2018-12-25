// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-adaptive": {
      // remUnit: 75,
      remUnit: 37.5,
      baseDpr: 2,
      remPrecision: 6,
      autoRem: true
    }
  }
}
