function solution(numbers, target) {
  let answer = 0;
  function ans(sum, len) {
    if (len === numbers.length && sum === target) {
      answer++;
      return;
    }
    if (len > numbers.length) return;
    ans(sum + numbers[len], len + 1);
    ans(sum - numbers[len], len + 1);
  }
  ans(0, 0);
  return answer;
}

let numbers = [1, 1, 1, 1, 1];
let target = 3;

console.log(solution(numbers, target));
