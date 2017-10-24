var path = require('path');
var webpack = require('webpack');

module.exports = {
  context:__dirname + '/src',
  entry: [
    "./index.js"
  ],
  output: {
    path: __dirname + '/static',
    filename: "bundle.js",
    //publicPath:'http://localhost:8080/'
    publicPath:'https://blackwood.herokuapp.com/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        exclude: /node_modules/
      },{
      test: /\.css$/,
      loader: 'style-loader!css-loader'
      },{
        test: /\.(jpe?g|png|gif|svg|tif)$/,
        //loaders: ['url', 'image-webpack']
        loader: "file-loader"
      // loaders:[  'file?hash=sha512&digest=hex&name=[hash].[ext]',
      // 'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false']
      }
    ]
  },
  resolve: {
  extensions: ['.js', '.jsx']
},
  plugins: [
  ]

};
