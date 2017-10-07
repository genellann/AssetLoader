module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    browserify: {
      dev: {
        src: "src/**/*.js",
        dest: "dist/bundle.js",
        options: {
          transform: [["babelify", {"presets": ["es2015", "stage-0"]}]],
          external: [
            "../AssetLoaderTest/lib/phaser.min.js",
            "../AssetLoaderTest/lib/phaser-asset-loader-0.0.1.min.js"
          ],
          browserifyOptions: {
            debug: true
          }
        }
      }
    },
  });
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['browserify:dev']);
};
