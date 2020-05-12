function solution(tickets) {
  let ticket = tickets.reduce((arr, v) => {
    if (arr[v[0]] === undefined) {
      arr[v[0]] = [v[1]];
    } else {
      arr[v[0]].push(v[1]);
    }
    return arr;
  }, []);
  console.log(ticket);

  let answer = [];
  let arr = null;
  Object.keys(ticket).forEach(v1 => {
    arr = [];
    arr.push(v1);
    ticket[v1].forEach(v2 => {
      arr.push(v2);
      arr.push(ticket[v2]);
      dfs(ticket[v2]);
    });
    answer.push(arr);
  });

  function dfs(v1) {
    if (ticket[v1] !== undefined) {
      ticket[v1].forEach(v2 => {
        arr.push(v2);
        arr.push(ticket[v2]);
        dfs(ticket[v2]);
      });
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
