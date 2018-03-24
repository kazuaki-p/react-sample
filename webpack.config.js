module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    library: 'Trial',
    libraryTarget: 'umd'
  },
  //devtool: 'source-map',
  resolve: {
    extensions: [ '.js', 'jsx', '.json', '.css' ]
  },
  module: {
    rules: [
      /*
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'source-map-loader'
      },
      */
      {
        test: /\.css$/,
        use: [require.resolve('style-loader'), {
          loader: require.resolve('css-loader'),
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[local]'
          }
        }]},
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets:['es2015','react'],
          plugins: ["transform-decorators-legacy", "transform-class-properties"]
        }
      }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  }
}
