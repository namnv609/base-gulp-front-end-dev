var gulp = require("gulp");

gulp.task("default", [
    "browserSync",
    "compass",
    "coffee",
    "less",
    "watch",
]);
