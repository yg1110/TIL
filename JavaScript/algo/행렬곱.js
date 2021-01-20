function solution(arr1, arr2) {
  return arr1.map(v1 => {
    let row = v1.map(v2 => {
      return v2;
    });
    return arr2[0].map((v3, k) => {
      return arr2
        .map(v4 => {
          return v4[k];
        })
        .reduce((acc, cur, idx) => {
          acc += row[idx] * cur;
          return acc;
        }, 0);
    });
  });
}

let arr1 = [
  [1, 4],
  [3, 2],
  [4, 1]
];

let arr2 = [
  [3, 3],
  [3, 3]
];

let arr3 = [
  [2, 3, 2],
  [4, 2, 4],
  [3, 1, 4]
];
let arr4 = [
  [5, 4, 3],
  [2, 4, 1],
  [3, 1, 1]
];

let arr5 = [
  [1, 2, 3],
  [4, 5, 6]
];
// 3*2
let arr6 = [
  [1, 4],
  [2, 5],
  [3, 6]
];
// 2*3
// [
//   [14, 32],
//   [32, 77]
// ];

// ((0,0+0,0), (0,1+1,0)), ((0,0+0,1) (0,1+1,1)))
// ((1,0+0,0), (1,1+1,0)), ((1,0+0,1) (1,1+1,1)))
// ((2,0+0,0), (2,1+1,0)), ((2,0+0,1) (2,1+1,1)))
console.log(solution(arr3, arr4));
