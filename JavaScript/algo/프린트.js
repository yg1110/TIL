function solution(priorities, location) {
  let answer = 0;
  let data = priorities.reduce((arr, v, i) => {
    arr.push({
      index: i,
      priority: v
    });
    return arr;
  }, []);

  let seq = priorities.sort().reverse();
  let cnt = 0;
  let shiftdata = null;
  while (data.length !== 0) {
    shiftdata = data.shift();
    if (shiftdata.priority === seq[cnt]) {
      answer++;
      cnt++;
      if (shiftdata.index === location) {
        return answer;
      }
    } else {
      data.push(shiftdata);
    }
  }
}

let priorities = [2, 1, 3, 2];
let priorities2 = [1, 1, 9, 1, 1, 1];
let location = 2;
let location2 = 0;

console.log(solution(priorities, location));
