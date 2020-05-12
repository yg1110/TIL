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

function Point() {}
Point.prototype.di = [1, -1, 0, 0];
Point.prototype.dj = [0, 0, -1, 1];

let visit = [...map];
let number = [];
let cnt = null;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === "1" && visit[i][j] !== true) {
      cnt = 1;
      visit[i][j] = true;
      dfs(i, j);
      number.push(cnt);
    }
  }
}

function dfs(i, j) {
  let p = new Point();
  for (let d = 0; d < 4; d++) {
    let ni = i + p.di[d];
    let nj = j + p.dj[d];
    if (
      ni >= 0 &&
      ni < N &&
      nj >= 0 &&
      nj < N &&
      visit[ni][nj] !== true &&
      map[ni][nj] === "1"
    ) {
      visit[ni][nj] = true;
      cnt++;
      dfs(ni, nj);
    }
  }
}
number.sort((a, b) => a - b);
console.log(number.length);
console.log(number.join("\n"));
