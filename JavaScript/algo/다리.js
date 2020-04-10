let bridge_length = [2, 100, 100];
let weight = [10, 100, 100];
let truck_weights = [
  [7, 4, 5, 6],
  [10],
  [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
];

function solution(bridge_length, weight, truck_weights) {
  var answer = bridge_length * truck_weights.length + 1;
  for (let i = 0; i < truck_weights.length - 1; i++) {
    if (truck_weights[i] + truck_weights[i + 1] <= weight) {
      answer--;
    }
  }
  return answer;
}

solution(bridge_length[0], weight[0], truck_weights[0]);
