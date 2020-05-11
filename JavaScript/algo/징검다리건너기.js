function solution(stones, k) {
  let answer = 0;
  while (true) {
    let flag = false;
    stones = stones.map(v => {
      if (v === 0) {
        return v;
      }
      flag = true;
      return v - 1;
    });

    let temp = 0;
    for (let i = 0; i < stones.length; i++) {
      if (stones[i] === 0) {
        temp === 0 ? (temp = 1) : temp++;
        if (temp > k) {
          flag = false;
          break;
        }
      } else {
        temp = 0;
      }
    }
    if (temp > k || flag === false) {
      break;
    }
    answer++;
  }
  return answer;
}

let stones = [2, 4, 5, 3, 2, 1, 4, 2, 5, 1];
let k = 3;
console.log(solution(stones, k));
