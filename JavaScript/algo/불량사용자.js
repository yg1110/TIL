let user_id = ["frodo", "fradi", "crodo", "abc123", "frodoc"];
// let banned_id = ["fr*d*", "abc1**"];
// let banned_id = ["*rodo", "*rodo", "******"];
let banned_id = ["fr*d*", "*rodo", "******", "******"];

function solution(user_id, banned_id) {
  let answer = 0;
  let use = [];
  let banlist = [];
  let deduplication = [];

  function perm(idx, pick) {
    if (idx == pick) {
      let data = banlist.filter((v2, j) => {
        return v2.length === banned_id[j].length;
      });

      if (data.length === banned_id.length) {
        let flag = banned_id.every((v3, k) => {
          return [...v3].every((v4, l) => {
            if (v4 === "*") return true;
            if (v4 === data[k][l]) return true;
            else return false;
          });
        });
        if (flag === true) {
          if (deduplication[data.sort()] === undefined) {
            deduplication[data.sort()] = 1;
            answer++;
          }
        }
      }
      return;
    }
    for (let i = 0; i < user_id.length; i++) {
      if (!use[i]) {
        banlist.push(user_id[i]);
        use[i] = true;
        perm(idx + 1, pick);
        use[i] = false;
        banlist.pop();
      }
    }
  }

  perm(0, banned_id.length);
  return answer;
}

console.log(solution(user_id, banned_id));

["frodo", "crodo", "abc123", "frodoc"][("fradi", "frodo", "abc123", "frodoc")];
