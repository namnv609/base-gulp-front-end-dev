var gulp = require("gulp"),
    coffee = require("gulp-coffee"),
    notify = require("gulp-notify"),
    errorHandler = require("../util/errorHandler"),
    config = require("../config").coffee,
    reload = require("browser-sync").reload;

gulp.task("coffee", function() {
    gulp.src([
        config.src + "/**/*.coffee"
    ]).pipe(
        coffee({
            bare: true
        })
    ).on("error", errorHandler).pipe(
        gulp.dest(config.dest)
    ).pipe(reload({
        stream: true
    }))
    .pipe(
        notify("Compiled <%= file.relative %>")
    )
});
