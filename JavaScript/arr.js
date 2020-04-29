const arr = [1, 2, 3, 4, 5];

const map = arr.map(v => {
  return v;
});
console.log(map);

const alphabets = ["a", "b", "c", "a"];
const count = alphabets.reduce((acc, current) => {
  if (acc[current]) acc[current] += 1;
  else acc[current] = 1;
  return acc;
}, {});
console.log(count);

const avg = arr.reduce((acc, current, index, array) => {
  if (index === array.length - 1) {
    return (acc + current) / array.length;
  }
  return acc + current;
}, 0);
// 누산기accumulator (acc)
// 현재 값 (cur)
// 현재 인덱스 (idx)
// 원본 배열 (src)
console.log(avg);

// const arr = [1, 2, 3, 4, 5];
const odd = arr.filter(v => {
  return v % 2 === 1;
});

console.log(odd);

const odd2 = arr.some(v => {
  console.log(v);
  return v % 2 === 0;
});

console.log(odd2);

const arr2 = [1, 1, 2, 1, 1];
const every = arr2.every(v => {
  console.log(v);
  return v === 1;
});

console.log(every);
