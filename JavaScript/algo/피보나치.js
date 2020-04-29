function solution(n) {
  let answer = 0;

  let num1 = 0;
  let num2 = 1;
  for (let i = 2; i <= n; i++) {
    answer = (num1 + num2) % 1234567;
    num1 = num2;
    num2 = answer;
  }
  return answer;
}

function solution(n) {
  let answer = 0;

  function fibo(num1, num2, m) {
    if (m > n) {
      answer = num1;
      return;
    }
    fibo(num2, (num1 + num2) % 1234567, m + 1);
  }
  fibo(0, 1, 1);
  return answer;
}

console.log(solution(1234567));
