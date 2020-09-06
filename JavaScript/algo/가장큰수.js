const numbers = [
  [6, 10, 2],
  [3, 30, 34, 5, 9]
];

function solution(numbers) {
  return (arr = numbers.sort((a, b) => {
    // String(b)[0] - String(a)[0];

    const word1 = Array.from(String(a));
    const word2 = Array.from(String(b));

    console.log(word1);

    let result = 0;
    word1.length > word2.length
      ? word1.some((v, i) => {
          if (word2[i] === undefined) {
            reuslt = 0;
            return true;
          }
          if (v !== word2[i]) {
            if (Number(v) > Number(word2[i])) {
              result = 0;
            } else {
              result = 1;
            }
            return true;
          } else {
            return false;
          }
        })
      : word2.map((v, i) => {
          if (word1[i] === undefined) {
            reuslt = 1;
            return true;
          }
          if (v !== word1[i]) {
            if (Number(v) > Number(word1[i])) {
              result = 1;
            } else {
              result = 0;
            }
            return true;
          } else {
            return false;
          }
        });

    return result === 0 ? -1 : 1;
  }));
}

console.log(solution(numbers[1]));
