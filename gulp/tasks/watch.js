var gulp = require("gulp"),
    watch = require("gulp-watch"),
    config = require("../config");

gulp.task("watch", function() {
    watch(config.compass.watch, function() {
        gulp.start("compass");
    });
    watch(config.coffee.watch, function() {
        gulp.start("coffee");
    });
    watch(config.less.watch, function() {
        gulp.start("less");
    });
});
