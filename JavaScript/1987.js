const N = 10;
const K = 2;
let arr = [];

const data = [
  [87, 59, 88],
  [99, 94, 78],
  [94, 86, 86],
  [99, 100, 99],
  [69, 76, 70],
  [76, 89, 96],
  [98, 95, 96],
  [74, 69, 60],
  [98, 84, 67],
  [85, 84, 91]
];

data.map((v, i) => {
  let sum = 0;
  v.forEach((v2, i2) => {
    if (i2 === 0) {
      sum += v2 * 0.35;
    }
    if (i2 === 1) {
      sum += v2 * 0.45;
    }
    if (i2 === 2) {
      sum += v2 * 0.2;
    }
  });
  arr.push({ sum: sum, index: i });
});

const grade = ["A+", "A0", "A-", "B+", "B0", "B-", "C+", "C0", "C-", "D0"];

arr.sort((a, b) => {
  return a.sum - b.sum;
});

console.log(grade[arr[K / (N / 10)].index]);
