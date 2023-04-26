const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.js", //是預設的，並非不能改
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  //放的順序很重要
  devServer:{
      // static: './dist',
      static: path.join(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.s[c]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env", "@babel/preset-react"]
            }
        }
      }
    ]
  },
  // mode: "production",
};

