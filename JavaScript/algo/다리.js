let bridge_length = [2, 100, 100];
let weight = [10, 100, 100];
let truck_weights = [
  [7, 4, 5, 6],
  [10],
  [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
];

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let MoveTruck = [];
  let finishTruck = [];
  let BridgeWeight = 0;

  while (MoveTruck.length > 0 || truck_weights.length > 0) {
    answer++;
    let now = truck_weights[0];
    if (BridgeWeight + now <= weight) {
      BridgeWeight += now;
      MoveTruck.push(0);
      console.log(MoveTruck);
      truck_weights.shift();
    }

    MoveTruck = MoveTruck.map(v => {
      return v + 1;
    });

    if (MoveTruck[0] > bridge_length) {
      BridgeWeight -= now;
      finishTruck.push(MoveTruck.shift());
    }
    // console.log(answer, finishTruck, MoveTruck, truck_weights);
  }
  return answer;
}
console.log(solution(bridge_length[0], weight[0], truck_weights[0]));
// console.log(solution(bridge_length[1], weight[1], truck_weights[1]));
// console.log(solution(bridge_length[2], weight[2], truck_weights[2]));
