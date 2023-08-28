const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];
const arr3 = [...arr1, ...arr2];

arr3[0] = 0;

const [a, b, c, ...rest] = arr3;

console.log(arr1);
console.log(arr2);
console.log(arr3);

console.log(a);
console.log(b);
console.log(c);
console.log(rest);
