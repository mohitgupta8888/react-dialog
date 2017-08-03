module.exports = function (config) {
  // This is the default webpack config defined in the `../webpack.config.js`
  // modify as you need.
  config.module.loaders = [
    {
      test: /\.css?$/,
      loaders: ['style-loader', 'css-loader'],
      //include: path.resolve(__dirname, '../'),
    },
    {
      test: /\.(png|jpg|gif)$/,
      loaders: ['url-loader']
    }
  ];
};
