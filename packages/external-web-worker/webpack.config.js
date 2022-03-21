export default {
  mode: "production",
  entry: "./src/index.js",
  experiments: {
    outputModule: true,
  },
  output: {
    path: new URL('./dist', import.meta.url).pathname,
    filename: "external-web-worker.js",
    module: true,
    library: {
      type: "module"
    },
    clean: true
  },
}