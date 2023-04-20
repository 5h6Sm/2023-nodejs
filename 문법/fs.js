const fs = require('fs');
const path = require('path');

console.log(__dirname);

const files = fs.readdirSync(__dirname);

// 특정 파일의 전체(절대) 경로
// rewult = __dirname + '\\' + files[1];
// /문자열 합치는 것보다 join을 사용하는 것을 권장(경로방식을 운영체제에 맞춰서 처리해 줌)
result = path.join(__dirname, files[1]);
console.log(result);

// 해당 파일에 대한 정보를 알 수 있음
console.log(fs.statSync(result));

// 파일 복사
const copiedFile = path.join(__dirname, '복사한파일.js');
fs.copyFileSync(result, copiedFile);
// fs.unlinkSync(copiedFile);
const renameFile = path.join(__dirname, '변경한파일.js');
fs.renameSync(renameFile);

console.log(fs.statSync(result));


