var path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
                [
                  "@babel/preset-react",
                  {
                    "pragma": "dom", // default pragma is React.createElement
                    "pragmaFrag": "DomFrag", // default is React.Fragment
                    "throwIfNamespace": false // defaults to true
                  }
                ]
              ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  externals: {
    'react': 'commonjs react' 
  }
};