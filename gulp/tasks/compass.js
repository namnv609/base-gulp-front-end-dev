var gulp = require("gulp"),
    compass = require("gulp-compass"),
    notify = require("gulp-notify"),
    errorHandler = require("../util/errorHandler"),
    config = require("../config").compass;

gulp.task("compass", function() {
    gulp.src([
        config.src + "/**/*.s*ss",
        "!" + config.src + "/common/**/*.s*ss",
        "!" + config.src + "/components/**/*.s*ss"
    ]).pipe(compass({
        config_file: config.configFile,
        sass: config.src,
        css: config.dest
    })).on("error", errorHandler).pipe(
        gulp.dest(config.dest)
    ).pipe(
        notify("Complied <%= file.relative %>")
    )
});
