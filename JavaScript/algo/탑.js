let heights = [
  [6, 9, 5, 7, 4],
  [3, 9, 9, 3, 5, 7, 2],
  [1, 5, 3, 6, 7, 6, 5]
];

function solution(heights) {
  let answer = Array.apply(null, new Array(heights.length)).map(
    Number.prototype.valueOf,
    0
  );
  for (let i = heights.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (heights[i] < heights[j]) {
        answer[i] = j + 1;
        break;
      }
    }
  }
  return answer;
}

solution(heights[0]);
