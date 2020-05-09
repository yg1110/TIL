const input = [3, 29, 38, 99, 57, 74, 40, 85, 61];
const maxNum = Math.max(...input);
const idx = input.findIndex(num => num === maxNum);
console.log(maxNum);
console.log(idx + 1);
