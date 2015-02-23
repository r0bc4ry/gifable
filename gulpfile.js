// Load Gulp and other critical dependencies
var argv = require('yargs').argv;
var del = require('del');
var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var plugins = require('gulp-load-plugins')();

// Define frontend modules
var modules = [
    'gif',
    'index'
];

// For each module, dynamically create Gulp tasks
modules.forEach(function(module) {
    // Compile JS from module
    gulp.task(module + ':js', function() {
        return gulp.src('resources/assets/' + module + '/js/**/*.js')
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

    // Compile CSS from module
    gulp.task(module + ':styles', function() {
        return gulp.src('resources/assets/' + module + '/sass/app.scss')
            .pipe(plugins.sass({ errLogToConsole: true, includePaths: require('node-neat').includePaths }))
            .pipe(plugins.if(argv.production, plugins.minifyCss()))
            .pipe(plugins.rename(module + '.css'))
            .pipe(gulp.dest('public/css'))
            .pipe(plugins.livereload());
    });

    // Compile HTML from module
    gulp.task(module + ':views', function() {
        return gulp.src('resources/assets/' + module + '/js/**/*.html')
            .pipe(plugins.if(argv.production, plugins.minifyHtml({ empty: true })))
            .pipe(plugins.angularTemplatecache({ module: 'gifable.' + module + '.templates' }))
            .pipe(gulp.dest('public/js/' + module))
            .pipe(plugins.livereload());
    });
});

// Task to remove previous build files from the /public directory
gulp.task('shared:clean', function() {
    del.sync([
        'public/css',
        'public/js'
    ], { force: true });
});

// Compile vendor JS from Bower files
gulp.task('vendor:js', function() {
    return gulp.src(mainBowerFiles())
        .pipe(plugins.filter([
            '**/*.js',
            '!**/*.min.js'
        ]))
        .pipe(plugins.concat('vendors.js'))
        .pipe(plugins.if(argv.production, plugins.uglify()))
        .pipe(gulp.dest('public/js'));
});

// Compile vendor CSS from Bower files
gulp.task('vendor:styles', function() {
    return gulp.src(mainBowerFiles())
        .pipe(plugins.filter([
            'normalize.css'
        ]))
        .pipe(plugins.concat('vendors.css'))
        .pipe(plugins.if(argv.production, plugins.minifyCss()))
        .pipe(gulp.dest('public/css'));
});

// Default task
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

// Initializes watch task(s) after running default task
gulp.task('watch', ['default'], function() {
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

    plugins.livereload.listen();
});
