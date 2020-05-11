let board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

function solution(board) {
  dfs(0, 0);
  let di = [-1, 1, 0, 0];
  let dj = [0, 0, -1, 1];
  let visit = [];
  function dfs(i, j) {
      for(let i=0; i<4; i++){
          let ni = di[i]
          if(board[i][j] === 0 && )
          di[i]
      }
  }
  var answer = 0;
  return answer;
}

console.log(solution(board));
