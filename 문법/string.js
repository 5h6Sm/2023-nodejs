const str = "Hello world";

console.log(str.length);

console.log(str.slice(1, 5));
console.log(str.slice(2));
console.log(str.slice(1));

a = str.replace('world', 'everyone');
console.log(a);

console.log(str);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

// 문자열 포함여부
console.log(str.includes('world')); //true
console.log(str.includes('hello')); //false

console.log(str);