module.exports = {
  root: true,
  env: {
    node: true,
    // browser: true,
  },
  extends: [
    // 'plugin:vue/essential',
    // '@vue/airbnb'
    'standard'
  ],
  rules: {
    "semi": [2],
    "quotes": [2, "single"],
    "comma-dangle": [0, "never"],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow async-await
    'generator-star-spacing': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: [
    "vue"
  ],
}