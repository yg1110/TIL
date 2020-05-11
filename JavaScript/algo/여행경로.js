function solution(tickets) {
  var answer = [];
  let di = [-1, 1, 0, 0];
  let dj = [0, 0, -1, 1];

  let queue = [];
  let visit = null;
  let word = [];
  for (let i = 0; i < tickets.length; i++) {
    for (let j = 0; j < tickets[i].length; j++) {
      visit = [...tickets];
      queue.push({ i: i, j: j, value: tickets[i][j] });
      visit[i][j] = true;
      bfs(tickets.length, tickets[i].length);
    }
  }

  function bfs(N, M) {
    while (queue.length !== 0) {
      let now = queue.shift();
      console.log(now);
      for (let d = 0; d < 4; d++) {
        let ni = now.i + di[d];
        let nj = now.j + dj[d];
        if (ni >= 0 && ni < N && nj >= 0 && nj < M && visit[ni][nj] !== true) {
          queue.push({ i: ni, j: nj, value: tickets[ni][nj] });
          visit[ni][nj] = true;
        }
      }
    }
  }
  return answer;
}

let tickets = [
  ["ICN", "JFK"],
  ["HND", "IAD"],
  ["JFK", "HND"]
];

let tickets2 = [
  ["ICN", "SFO"],
  ["ICN", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "ICN"],
  ["ATL", "SFO"]
];

console.log(solution(tickets));
