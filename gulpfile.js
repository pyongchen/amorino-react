let gulp = require('gulp');
let server = require('gulp-express');
let shell = require('gulp-shell');
let webpack = require('webpack');
let browserSync = require('browser-sync').create();
let serverFile = './src/server/server.js';

//直接使用命令行执行webpack
gulp.task('webpack', shell.task([
    'webpack --progress -w --colors'
  ])
);

// gulp.task('browser-sync', function() {
//   browserSync.init({ proxy: '127.0.0.1:3001' });
// });

//监听nodejs,有变化则重启服务器
gulp.task('watch', () => {
  gulp.watch('./src/server/**/*.js', ()=>{
    server.stop();
    server.run([serverFile]);
  });
});

// 启动后台服务
gulp.task('server', () => {
  server.run([serverFile]);
});

gulp.task('default', ['webpack', 'server', 'watch']);