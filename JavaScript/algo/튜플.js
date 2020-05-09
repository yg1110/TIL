// let s = "{{2},{2,1},{2,1,3},{2,1,3,4}}";
// let s = "{{123}}";
// let s = "{{1,2,3},{2,1},{1,2,4,3},{2}}";
let s = "{{1,2,3},{2,1},{1,2,4,3},{2}}";

function solution(s) {
  let s2 = s.replace("{{", "{").replace("}}", "}");
  let arr = s2.split("},");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace("{", "").replace("}", "");
  }

  arr.sort((a, b) => {
    return a.length - b.length;
  });

  let num = arr.map(v => {
    return v.split(",");
  });

  let cnt = [];
  let answer = [];
  num.forEach(v => {
    let filter = v.filter(v2 => {
      cnt[v2] = cnt[v2] + 1 || 1;
      return cnt[v2] === 1;
    });
    answer.push(filter[0]);
  });
  return answer;
}
console.log(solution(s));
