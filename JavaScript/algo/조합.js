function solution() {
  var answer = 0;
  comb(0, 0, 3);
  return answer;
}

function comb(idx, target, pick) {
  if (target === pick) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
      if (use[i] === 1) {
        answer.push(arr[i]);
      }
    }
    console.log(answer);
    return;
  }

  if (idx === arr.length) return;

  use[idx] = 1;
  comb(idx + 1, target + 1, pick);
  use[idx] = 0;
  comb(idx + 1, target, pick);
}

let arr = [1, 2, 3, 4, 5];

let use = new Array(arr.length).fill(0);

console.log(solution(arr));
