const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeImagens(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript(){
    return gulp.src('./source/scripts/*.js') //funcao que especifica o local dos arquivos fontes
    .pipe(uglify())  //executa a compilacao do Js
    .pipe(gulp.dest('./build/scripts')); //pasta de destino dos arquivos compilados
}

function compilaSass(){
    return gulp.src('./source/styles/main.scss')  //funcao que especifica o local dos arquivos fontes
        .pipe(sass()) //executa a compilacao do sass  
        .pipe(gulp.dest('./build/styles')); // pasta de destino dos arquivos compilados
}






exports.default = gulp.parallel(compilaSass,comprimeJavaScript, comprimeImagens);