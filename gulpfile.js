const gulp = require('gulp');
const webpackConfig = require('./webpack.config');
const webpack = require('webpack-stream');

gulp.task('default', () => {
  return gulp.src('src/js/index.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('dist/'));
});
