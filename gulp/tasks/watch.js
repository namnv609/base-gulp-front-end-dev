var gulp = require("gulp"),
    watch = require("gulp-watch"),
    config = require("../config")
    broswerSync = require("browser-sync");

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
    watch(config.html.src, broswerSync.reload);
});
