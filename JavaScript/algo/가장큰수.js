const numbers = [
  [6, 10, 2],
  [3, 30, 34, 5, 9],
  [10, 101],
  [1, 11, 111, 1111],
  [0, 0, 0, 0, 0, 0]
];

const combination = (use, idx) => {
  if (idx === use.length) {
    console.log(use);
    const arr = numbers[0].filter((v, i) => use[i]);
    console.log(arr);
    return;
  }

  use[idx] = true;
  combination(use, idx + 1);
  use[idx] = false;
  combination(use, idx + 1);
};

function solution(numbers) {
  let answer = "0";

  const permitation = (use, arr, idx) => {
    if (idx === use.length) {
      const number = arr.reduce((a, c) => (a += c), "");
      if (answer < number) {
        answer = number;
      }
    }
    use.forEach((v, i) => {
      if (!v) {
        arr.push(numbers[i]);
        use[i] = true;
        permitation(use, arr, idx + 1);
        use[i] = false;
        arr.pop();
      }
    });
  };

  permitation(Array(numbers.length).fill(false), [], 0);

  return answer;
}

console.log(solution(numbers[1]));
