function solution() {
  var answer = 0;
  perm(0, 3);
  return answer;
}

let result = [];
function perm(idx, pick) {
  if (idx == pick) {
    console.log(result);
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (!use[i]) {
      result.push(arr[i]);
      use[i] = true;
      perm(idx + 1, pick);
      use[i] = false;
      result.pop();
    }
  }
}

let arr = [1, 2, 3, 4, 5];

let use = new Array(arr.length).fill(0);

console.log(solution(arr));
