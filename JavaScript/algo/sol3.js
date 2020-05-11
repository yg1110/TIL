function solution(gems) {
  var answer = [];
  let use = [];
  gems.forEach(v => {
    if (use[v] === undefined) {
      use[v] = 1;
      use.push(v);
    }
  });

  let min = 100000;
  for (let i = 0; i < gems.length; i++) {
    let flag = [];
    let cnt = 0;
    for (let j = i; j < gems.length; j++) {
      if (j - i > min) break;
      flag[gems[j]] = flag[gems[j]] + 1 || 1;
      if (flag[gems[j]] === 1) {
        cnt++;
        if (cnt === use.length) {
          let sum = j - i;
          if (sum < min) {
            min = sum;
            answer[0] = i + 1;
            answer[1] = j + 1;
          }
        }
      }
    }
  }
  return answer;
}

let gems = ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"];

console.log(solution(gems));
