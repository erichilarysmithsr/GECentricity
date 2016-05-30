/// <binding BeforeBuild='clean' AfterBuild='moveToLibs' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var del = require('del');
var concat = require('gulp-concat');

gulp.task('clean', function () {
    return del(['./libs/**/*']);
});

gulp.task('moveToLibs', function (done) {
    gulp.src([
            'node_modules/jquery/dist/jquery.*js',
            'node_modules/angular/angular.*.js',
            'node_modules/angular/angular.*.js.map',
            
    ]).pipe(gulp.dest('./libs/'));

    gulp.src('scripts/$mdObject.*.js')
    .pipe(concat('$mdObject.js'))
    .pipe(uglify({
        preserveComments: 'license'
    }))
        .pipe(rename({
            suffix: '.min'
        }))
    .pipe(gulp.dest('./libs/'));

});
