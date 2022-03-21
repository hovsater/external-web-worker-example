import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: './src/index.js',
  experiments: {
    outputModule: true
  },
  output: {
    filename: 'main.js',
    path: new URL('./dist', import.meta.url).pathname,
    clean: true,
    module: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'External Web Worker Example',
      scriptLoading: 'module',
    }),
  ],
};
