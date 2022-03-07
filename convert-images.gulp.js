const gulp = require("gulp");
const webp = require("gulp-webp");

const ASSETS_DIR = "public";
const EXCLUDE_SRC_GLOB = `!(favicon*|*-16|*-32|*-96|apple-*|ms-*|android-*)`;

function convertImagesToWebP() {
  const src = `${ASSETS_DIR}/**/${EXCLUDE_SRC_GLOB}*.{jpg,png}`;

  gulp.task("default", () =>
    gulp
      .src(src)
      .pipe(webp())
      .pipe(
        gulp.dest(function (file) {
          return file.base;
        })
      )
  );
}

exports.default = convertImagesToWebP();
