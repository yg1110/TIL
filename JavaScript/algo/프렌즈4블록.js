let m = [4, 6];
let n = [5, 6];
let board = [
  ["CCBDE", "AAADE", "AAABF", "CCBBF"],
  ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]
];

function solution(m, n, board) {
  var answer = 0;
  let Point = {
    i: 1,
    j: -1
  };

  let queue = [Point];
  let di = [-1, 1, 0, 0];
  let dj = [0, 0, -1, 1];
  console.log(Point["i"]);
  console.log(Point["j"]);

  while (queue.size !== 0) {
    let now = queue.shift();
    console.log(now);
    // for (let d = 0; d < 4; d++) {}
  }
  return answer;
}

solution(m[0], n[0], board[0]);
