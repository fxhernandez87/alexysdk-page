module.exports = {
  use: [
    '@neutrinojs/airbnb',
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'Alexys Gonzalez'
        }
      }
    ],
    ['@neutrinojs/style-loader', {
      loaders: [{
        loader: 'sass-loader',
        useId: 'sass',
      }],
      test: /\.(sass|scss)$/,
    }],
    '@neutrinojs/jest'
  ]
};
