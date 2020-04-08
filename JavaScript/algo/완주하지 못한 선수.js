function solution(participant, completion) {
  let part = {};
  participant.map(p => {
    part[p] = part[p] === undefined ? 1 : part[p] + 1;
  });
  completion.map(c => {
    part[c] -= 1;
  });

  for (let i in part) {
    if (part[i] !== 0) {
      return i;
    }
  }
}

let participant = [
  ["leo", "kiki", "eden"],
  ["marina", "josipa", "nikola", "vinko", "filipa"],
  ["mislav", "stanko", "mislav", "ana"]
];
let completion = [
  ["eden", "kiki"],
  ["josipa", "filipa", "marina", "nikola"],
  ["stanko", "ana", "mislav"]
];
solution(participant[2], completion[2]);
