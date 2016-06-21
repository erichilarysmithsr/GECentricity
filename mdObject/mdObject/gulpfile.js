/// <binding BeforeBuild='clean' AfterBuild='moveToLibs, compile' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var del = require('del');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');

gulp.task('clean', function () {
    return del(['./libs/**/*']);
});

gulp.task('moveToLibs', function (done) {
    gulp.src([
            'node_modules/jquery/dist/jquery.*js',
            'node_modules/angular/angular.*.js',
            'node_modules/angular/angular.*.js.map',

    ]).pipe(gulp.dest('./libs/'));

    gulp.src([
            'libs/src/js/scripts/$mdObject.License.js',
            'libs/src/js/scripts/$mdObject.ObjectBase.js',
            'libs/src/js/scripts/$mdObject.mel.js',
            'libs/src/js/scripts/$mdObject.address.js',
            'libs/src/js/scripts/$mdObject.phone.js',
            'libs/src/js/scripts/$mdObject.immunization.js',
            'libs/src/js/scripts/$mdObject.patient.js',
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('$mdObject.js'))
    .pipe(uglify({
        preserveComments: 'license'
    }))
    .pipe(rename({
        suffix: '.min'
    }))
        .pipe(sourcemaps.write())
    .pipe(gulp.dest('./libs/'));

});

gulp.task('compile', function () {
    var tsResult = gulp.src([
            'scripts/$mdObject.License.ts',
            'scripts/$mdObject.ObjectBase.ts',
            'scripts/$mdObject.mel.ts',
            'scripts/$mdObject.address.ts',
            'scripts/$mdObject.phone.ts',
            'scripts/$mdObject.immunization.ts',
            'scripts/$mdObject.patient.ts',
    ])
       .pipe(sourcemaps.init()) // This means sourcemaps will be generated 
       .pipe(ts({
           sortOutput: true,
           target: 'ES5'
           // ... 
       }));

    return tsResult
       .pipe(concat('./libs/js-library.js')) // You can use other plugins that also support gulp-sourcemaps
        //.pipe(uglify({
        //    preserveComments: 'license'
        //}))
            .pipe(rename({
                suffix: '.min'
            }))
        .pipe(sourcemaps.write()) // Now the sourcemaps are added to the .js file 
       .pipe(gulp.dest('./release/'));
});
