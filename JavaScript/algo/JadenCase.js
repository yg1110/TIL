function solution(s) {
  var answer = null;
  let words = s.split(" ");

  words.forEach((v, i) => {
    let word = v[0].toUpperCase();
    for (let i = 1; i < v.length; i++) {
      word += v[i].toLowerCase();
    }
    if (i === 0) {
      answer = [word];
    } else {
      answer.push(word);
    }
  });
  return answer.join(" ");
}

let s = ["3people unFollowed me", "for the last week"];
console.log(solution(s[0]));
