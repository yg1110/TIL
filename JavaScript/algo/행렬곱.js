function solution(arr1, arr2) {
  var answer = [[]];
  if (arr1.length < arr2.length) {
    [arr1, arr2] = [arr2, arr1];
  }
  for (let i = 0; i < arr1.length; i++) {
    for (let k = 0; k < arr2.length; k++) {
      let num = 0;
      for (let j = 0; j < arr1[i].length; j++) {
        console.log(arr1[i][j], arr2[j][k]);
        num += arr1[i][j] * arr2[j][k];
      }
      if (answer[i] === undefined) {
        answer[i] = [num];
      } else {
        answer[i].push(num);
      }
    }
  }

  return answer;
}
let arr1 = [
  [
    [2, 3, 2],
    [4, 2, 4],
    [3, 1, 4]
  ]
];

let arr2 = [
  [
    [5, 4, 3],
    [2, 4, 1],
    [3, 1, 1]
  ]
];

console.log(solution(arr1, arr2));
