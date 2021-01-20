function solution(n, computers) {
  var answer = 0;
  var visit = [...computers];
  for (let i = 0; i < n; i++) {
    if (visit[i][i] !== -1) {
      answer++;
      visit[i][i] = -1;
    }
    for (let j = 0; j < n; j++) {
      if (visit[i][j] !== -1 && computers[i][j] === 1) {
        visit[i][j] = -1;
        visit[j][i] = -1;
        dfs(j, visit, computers);
      }
    }
  }

  function dfs(i, visit, computers) {
    for (let j = 0; j < n; j++) {
      if (visit[i][j] !== -1 && computers[i][j] === 1) {
        visit[i][j] = -1;
        visit[j][i] = -1;
        dfs(j, visit, computers);
      }
    }
  }

  return answer;
}

n = 3;
computers = [
  [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]
  ],
  [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1]
  ]
];

console.log(solution(n, computers[1]));
