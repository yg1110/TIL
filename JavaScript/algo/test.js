function solution(s) {
  let arr = [...s];
  let cnt = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === 0) continue;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === 0) continue;
      if (arr[i] === arr[j]) {
        arr[i] = 0;
        arr[j] = 0;
        cnt += 2;
      } else {
        break;
      }
    }
  }
  console.log(cnt);
  return cnt === arr.length ? 1 : 0;
}

let s = "baabaa";
let s2 = "cdcd";
console.log(solution(s2));
