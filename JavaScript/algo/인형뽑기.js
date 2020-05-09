function solution(board, moves) {
  let answer = 0;
  let arr = [];
  for (let m = 0; m < moves.length; m++) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][moves[m] - 1] !== 0) {
        arr.push(board[i][moves[m] - 1]);
        board[i][moves[m] - 1] = 0;
        break;
      }
    }
  }
  while (true) {
    let flag = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) {
        arr.splice(i, 2);
        flag = 1;
        answer += 2;
        break;
      }
    }
    if (flag === 0) {
      break;
    }
  }
  return answer;
}
const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1]
];

const moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, moves));
