function solution(k, room_number) {
  let result = [];
  let room = [];
  let empty = 0;
  room_number.forEach(v => {
    if (room[v] === undefined) {
      room[v] = 1;
      result.push(v);
      return;
    } else {
      empty = v;
      while (empty <= k) {
        empty++;
        if (room[empty] === undefined) {
          room[empty] = 1;
          result.push(empty);
          break;
        }
      }
    }
  });
  return result;
}

let room_number = [1, 3, 4, 1, 3, 1];
let k = 10;

console.log(solution(k, room_number));
