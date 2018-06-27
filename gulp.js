const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');

var root = '/home/cbaca/MyDevelSites/nodeJS/mrsddev/dev';

gulp.task('html', () => {
	return gulp.src(root + 'views/*/*.hbs')
		.pipe(handlebars({}, {
			ignorePartials: true,
			batch: [root + 'views/*/*.hbs']
		}))
		.pipe(rename({
			extname: '.html'
		}))
		.pipe(gulp.dest('./dist')
	);
});