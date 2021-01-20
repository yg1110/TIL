const fs = require("fs");

let input = fs
  .readFileSync(process.argv.length > 2 ? "./input/단지번호.txt" : "/dev/stdin")
  .toString()
  .split("\n");

let N = input[0];
let map = [];
for (let i = 1; i < input.length; i++) {
  map[i - 1] = input[i].split("");
}

let visit = [...map];
let queue = [];
let number = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === "1" && visit[i][j] !== true) {
      visit[i][j] = true;
      queue.push({ i: i, j: j });
      number.push(bfs());
    }
  }
}

function bfs() {
  let di = [1, -1, 0, 0];
  let dj = [0, 0, -1, 1];
  let cnt = 1;
  while (queue.length !== 0) {
    const now = queue.shift();
    for (let d = 0; d < 4; d++) {
      let ni = now.i + di[d];
      let nj = now.j + dj[d];
      if (
        ni >= 0 &&
        ni < N &&
        nj >= 0 &&
        nj < N &&
        visit[ni][nj] !== true &&
        visit[ni][nj] === "1"
      ) {
        cnt++;
        queue.push({ i: ni, j: nj });
        visit[ni][nj] = true;
      }
    }
  }
  return cnt;
}

number.sort((a, b) => a - b);
console.log(number.length);
console.log(number.join("\n"));
