let begin = "hit";
let target = "cog";
let words = [
  ["hot", "dot", "dog", "lot", "log", "cog"],
  ["hot", "dot", "dog", "lot", "log"]
];

let answer = Infinity;
function solution(begin, target, words) {
  words.forEach((v, i) => {
    let visit = new Array(words.length).fill(false);

    if (diffword(begin, v) === 1) {
      visit[i] = true;
      dfs(v, target, visit, words, 1);
    }
  });
  return answer === Infinity ? 0 : answer;
}

function diffword(word, word2) {
  let cnt = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word2[i]) {
      cnt++;
    }
    if (cnt > 1) {
      break;
    }
  }
  return cnt;
}

function dfs(word, target, visit, words, count) {
  if (word === target) {
    if (answer > count) {
      answer = count;
    }
    return;
  }
  visit.forEach((v, i) => {
    if (v === false && diffword(words[i], word) === 1) {
      visit[i] = true;
      dfs(words[i], target, visit, words, count + 1);
      visit[i] = false;
    }
  });
}
console.log(solution(begin, target, words[0]));
