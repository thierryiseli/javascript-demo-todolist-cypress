export default {
  root: 'src',
  base: '',
  assetsInclude: ['**/*.svg'],
  build: {
    emptyOutDir: true,
    outDir: '../build',
    target: 'es2016',
    sourcemap: true,
    minify: false,
  },
  server: {
    port: 8080
  }
}