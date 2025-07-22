module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.path = require('path').resolve(__dirname, 'docs');
      return webpackConfig;
    },
  },
};