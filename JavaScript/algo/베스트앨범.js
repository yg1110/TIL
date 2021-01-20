let genres = ["classic", "pop", "classic", "classic", "pop"];
let plays = [500, 600, 150, 800, 2500];

function solution(genres, plays) {
  let answer = [];
  let cnt = {};
  let music = {};
  for (let i = 0; i < plays.length; i++) {
    if (cnt[genres[i]] === undefined) {
      cnt[genres[i]] = plays[i];
    } else {
      cnt[genres[i]] += plays[i];
    }
    music[i] = [i, plays[i]];
  }

  let s = Object.keys(cnt).sort((a, b) => {
    return cnt[b] - cnt[a];
  });

  console.log(s);
  let m = Object.values(music).sort((a, b) => {
    return b[1] - a[1];
  });
  console.log(m);

  let c = 0;
  let idx = 0;
  while (true) {
    c = 0;
    m.some(x => {
      if (genres[x[0]] === s[idx]) {
        answer.push(x[0]);
        c += 1;
        if (c === 2) return true;
      }
    });
    idx += 1;
    if (idx === s.length) break;
  }
  return answer;
}

solution(genres, plays);
