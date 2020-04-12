let bridge_length = [2, 100, 100];
let weight = [10, 100, 100];
let truck_weights = [
  [7, 4, 5, 6],
  [10],
  [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
];

function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  for (let i = 0; i < truck_weights.length; i++) {
    let sum = truck_weights[i];
    let cnt = 0;
    for (let j = i + 1; j < truck_weights.length; j++) {
      sum += truck_weights[j];
      if (sum > weight) {
        answer += cnt === 1 ? cnt * bridge_length : cnt * bridge_length - cnt;
        i = j;
        console.log(answer);
        break;
      }
      cnt++;
    }
    answer += cnt * bridge_length;
    console.log(answer);
  }
  return answer;
}
console.log(solution(bridge_length[0], weight[0], truck_weights[0]));
