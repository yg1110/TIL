// let progress = [93, 30, 55];
// let spped = [1, 30, 5];

// let progresses = [40, 93, 30, 55, 60, 65];
// let speeds = [60, 1, 30, 5, 10, 7];

// let progresses = [93, 30, 55, 60, 40, 65];
// let speeds = [1, 30, 5, 10, 60, 7];

let progresses = [5, 5, 5];
let speeds = [21, 25, 20];
function solution(progresses, speeds) {
  let ans = [];
  let time = progresses.map((v, i) => {
    return Math.ceil((100 - v) / speeds[i]);
  });

  console.log(time);

  let visit = new Array(time.length).fill(false);
  for (let i = 0; i < time.length; i++) {
    if (visit[i] === true) continue;
    visit[i] = true;
    let cnt = 1;
    for (let j = i + 1; j < time.length; j++) {
      if (time[i] >= time[j]) {
        cnt++;
        time[j] = time[i];
        visit[j] = true;
      } else {
        break;
      }
    }
    ans.push(cnt);
  }
  return ans;
}

console.log(solution(progresses, speeds));
