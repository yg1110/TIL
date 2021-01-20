function solution(arr) {
  let size = arr.length - 1;
  let answer = arr[size];

  loop: while (true) {
    for (let i = 0; i < size; i++) {
      if (answer % arr[i] !== 0) {
        answer += arr[size];
        continue loop;
      }
    }
    return answer;
  }
}
let arr = [[2, 6, 8, 14], [[1, 2, 3]]];
solution(arr[0]);
