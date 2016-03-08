/**
 * Module dependencies
 */

const ava = require('gulp-ava')
const gulp = require('gulp')
const babel = require('gulp-babel')
const eslint = require('gulp-eslint')
const ext = require('gulp-ext')
const help = require('gulp-task-listing')

gulp.task('help', help)

gulp.task('compile', [
  'compile-lib',
  'compile-bin',
  'compile-test'
])

gulp.task('compile-bin', function () {
  return gulp
          .src('bin/*')
          .pipe(babel({
            presets: ['es2015'],
            plugins: [
              'transform-runtime',
              'syntax-async-functions',
              'transform-async-to-generator'
            ]
          }))
          .pipe(ext.crop())
          .pipe(gulp.dest('build/bin'))
})

gulp.task('compile-test', function () {
  return gulp
          .src('test/*.js')
          .pipe(babel({
            presets: ['es2015'],
            plugins: [
              'syntax-async-functions',
              'transform-async-to-generator'
            ]
          }))
          .pipe(gulp.dest('build/test'))
})

gulp.task('compile-lib', function () {
  return gulp
          .src('lib/*.js')
          .pipe(babel({
            presets: ['es2015'],
            plugins: [
              'transform-runtime',
              'syntax-async-functions',
              'transform-async-to-generator'
            ]
          }))
          .pipe(gulp.dest('build/lib'))
})

gulp.task('test', ['compile'], function () {
  return gulp
          .src('build/test/*.js')
          .pipe(ava())
})

gulp.task('lint', function () {
  return gulp
          .src([
            'gulpfile.js',
            'test/*.js',
            'lib/*.js',
            'bin/*'
          ])
          .pipe(eslint())
          .pipe(eslint.format())
          .pipe(eslint.failAfterError())
})

gulp.task('default', ['lint', 'compile', 'test'])
