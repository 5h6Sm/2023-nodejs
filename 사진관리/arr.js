const arr = ['apple', 'banana', 'cherry', 'apple'];

arr.forEach(function(data, index){
    // console.log(`${index} : ${data}`);
});

// const cherryIndex = arr.findIndex(function(data){
//     return data === 'cherry';
// })

// return 값이 true에 해당한느 idx 반환, 없으면 -1 반환
const cherryIndex = arr.findIndex(data => data === 'cherry')

// 3번 index부터 cherry에 해당한느 idx 찾음
const a = arr.indexOf('cherry', 3);
console.log(a);

// 배열 끝부분에 data 추가
arr.push('grape');
console.log(arr);

const x = arr.pop();
console.log(x);
console.log(arr);