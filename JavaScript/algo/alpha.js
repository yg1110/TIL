function solution(msg) {
  const getCharArray = (charA, charZ) => {
    let alpha = [""],
      i = charA.charCodeAt(0),
      j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
      alpha.push(String.fromCharCode(i));
    }
    return alpha;
  };

  let alpha = getCharArray("A", "Z");
  console.log(alpha);

  var answer = [];
  let msgArr = [...msg];
  let word = "";
  for (let i = 0; i < msgArr.length - 1; i++) {
    word = msgArr[i] + msgArr[i + 1];
    console.log(word);
    if (alpha.includes(word)) {
      answer.push(alpha.indexOf(word));
      word = "";
    } else {
      answer.push(alpha.indexOf(msg[i]));

      alpha.push(word);
      word = msg[i];
      i++;
    }
  }
  [...msg].some(v => {
    word += v;
    console.log(word);
    return alpha.includes(word);
  });

  //   [...msg].map(v => {
  //     word += v;
  //     console.log(alpha.indexOf(word));
  //     if (alpha.indexOf(word) !== -1) {
  //       answer.push(alpha.indexOf(word));
  //       word = v;
  //     } else {
  //       alpha.push(word);
  //     }
  //   });
  return answer;
}

const msg = "KAKAO";
const answer = [[11, 1, 27, 15]];

console.log(solution(msg));
