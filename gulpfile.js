var gulp = require('gulp');
var argv = require('yargs').argv;
var del = require('del');
var mainBowerFiles = require('main-bower-files');
var plugins = require('gulp-load-plugins')();

var modules = ['gif', 'index'];

modules.forEach(function(module) {
    gulp.task(module + ':js', function() {
        return gulp.src('resources/assets/js/' + module + '/**/*.js')
            .pipe(plugins.ngAnnotate())
            .pipe(plugins.jshint())
            .pipe(plugins.jshint.reporter('jshint-stylish'))
            .pipe(plugins.if(!argv.production, plugins.sourcemaps.init({ loadMaps: true })))
                .pipe(plugins.concat('app.js'))
            .pipe(plugins.if(!argv.production, plugins.sourcemaps.write()))
            .pipe(plugins.if(argv.production, plugins.uglify()))
            .pipe(gulp.dest('public/js/' + module))
            .pipe(plugins.livereload());
    });

    gulp.task(module + ':styles', function() {
        return gulp.src('resources/assets/sass/' + module + '/app.scss')
            .pipe(plugins.sass({ errLogToConsole: true, includePaths: require('node-neat').includePaths }))
            .pipe(plugins.if(argv.production, plugins.minifyCss()))
            .pipe(plugins.rename(module + '.css'))
            .pipe(gulp.dest('public/css'))
            .pipe(plugins.livereload());
    });

    gulp.task(module + ':views', function() {
        return gulp.src('resources/assets/js/' + module + '/**/*.html')
            .pipe(plugins.if(argv.production, plugins.minifyHtml({ empty: true })))
            .pipe(plugins.angularTemplatecache({ module: 'gifable.' + module + '.templates' }))
            .pipe(gulp.dest('public/js/' + module))
            .pipe(plugins.livereload());
    });
});

gulp.task('shared:clean', function() {
    del.sync([
        'public/css',
        'public/js'
    ], { force: true });
});

gulp.task('vendor:js', function() {
    return gulp.src(mainBowerFiles())
        .pipe(plugins.filter(['**/*.js', '!**/*.min.js']))
        .pipe(plugins.if(!argv.production, plugins.sourcemaps.init({ loadMaps: true })))
            .pipe(plugins.concat('vendors.js'))
        .pipe(plugins.if(!argv.production, plugins.sourcemaps.write()))
        .pipe(plugins.if(argv.production, plugins.uglify()))
        .pipe(gulp.dest('public/js'));
});

gulp.task('vendor:styles', function() {
    return gulp.src(mainBowerFiles())
        .pipe(plugins.filter([
            'normalize.css',
            'dropzone.css'
        ]))
        .pipe(plugins.concat('vendors.css'))
        .pipe(plugins.if(argv.production, plugins.minifyCss()))
        .pipe(gulp.dest('public/css'));
});

gulp.task('default', ['shared:clean'], function() {
    gulp.start([
        'vendor:js',
        'vendor:styles',
        'gif:styles',
        'index:js',
        'index:styles',
        'index:views'
    ]);
});

gulp.task('watch', ['default'], function() {
    plugins.livereload.listen();

    modules.forEach(function(module) {
        gulp.watch('resources/assets/js/' + module + '/**/*.js', [module + ':js']);
        gulp.watch('resources/assets/sass/' + module + '/**/*.scss', [module + ':styles']);
        gulp.watch('resources/assets/js/' + module + '/**/*.html', [module + ':views']);
    });

    gulp.watch('resources/assets/sass/shared/**/*.scss', function() {
        modules.forEach(function(module) {
            gulp.start(module + ':styles');
        });
    });
});
