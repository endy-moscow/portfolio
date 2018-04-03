"use strict"
var gulp = require('gulp'),
    ftp = require('gulp-ftp');

gulp.task('upload', function () {
    return gulp.src(['./bundle.min.js','./index.html'])
        .pipe(ftp({
            host: 'ftp.postp12271.nichost.ru',
            user: 'postp12271_endy',
            pass: 'AXidar8R123456'
        }));
});

// Default
gulp.task('default', ['upload']);
