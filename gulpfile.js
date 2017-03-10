let gulp = require('gulp');
let server = require('gulp-develop-server');
let clean = require('gulp-clean');
let shell = require('gulp-shell');
let webpack = require('webpack');
let serverFile = './src/server/server.js';

//直接使用命令行执行webpack
gulp.task('webpack', shell.task([
    'webpack --progress --colors -w'
  ])
);

//监听express,有变化则重启服务器
gulp.task('watch', () => {
  gulp.watch('./src/server/**/*.js', server.restart);
});

// 清除上一次执行webpack的文件目录('./build'文件夹)
gulp.task('clean', () => {
  let src = ['build'];
  return gulp.src(src).pipe(clean({force: true}))
});

// 启动后台服务
gulp.task('server', () => {
  server.listen({
    path: serverFile
  })
});

gulp.task('default', ['clean', 'webpack', 'server', 'watch']);