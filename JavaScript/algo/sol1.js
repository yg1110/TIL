function solution(numbers, hand) {
  let answer = "";
  let lnow = [3, 0];
  let rnow = [3, 2];
  let a = null;
  let b = null;
  numbers.forEach(v => {
    switch (v) {
      case 0:
        a = Math.abs(lnow[0] - 3) + Math.abs(lnow[1] - 1);
        b = Math.abs(rnow[0] - 3) + Math.abs(rnow[1] - 1);
        if (a > b) {
          rnow = [3, 1];
          answer += "R";
        } else if (a < b) {
          lnow = [3, 1];
          answer += "L";
        } else {
          if (hand === "right") {
            rnow = [3, 1];
            answer += "R";
          } else {
            lnow = [3, 1];
            answer += "L";
          }
        }
        break;

      case 1:
        lnow = [0, 0];
        answer += "L";
        break;

      case 2:
        a = Math.abs(lnow[0] - 0) + Math.abs(lnow[1] - 1);
        b = Math.abs(rnow[0] - 0) + Math.abs(rnow[1] - 1);
        if (a > b) {
          rnow = [0, 1];
          answer += "R";
        } else if (a < b) {
          lnow = [0, 1];
          answer += "L";
        } else {
          if (hand === "right") {
            rnow = [0, 1];
            answer += "R";
          } else {
            lnow = [0, 1];
            answer += "L";
          }
        }
        break;

      case 3:
        rnow = [0, 2];
        answer += "R";
        break;

      case 4:
        lnow = [1, 0];
        answer += "L";
        break;

      case 5:
        a = Math.abs(lnow[0] - 1) + Math.abs(lnow[1] - 1);
        b = Math.abs(rnow[0] - 1) + Math.abs(rnow[1] - 1);
        if (a > b) {
          rnow = [1, 1];
          answer += "R";
        } else if (a < b) {
          lnow = [1, 1];
          answer += "L";
        } else {
          if (hand === "right") {
            rnow = [1, 1];
            answer += "R";
          } else {
            lnow = [1, 1];
            answer += "L";
          }
        }
        break;

      case 6:
        rnow = [1, 2];
        answer += "R";
        break;

      case 7:
        lnow = [2, 0];
        answer += "L";
        break;

      case 8:
        a = Math.abs(lnow[0] - 2) + Math.abs(lnow[1] - 1);
        b = Math.abs(rnow[0] - 2) + Math.abs(rnow[1] - 1);
        if (a > b) {
          rnow = [2, 1];
          answer += "R";
        } else if (a < b) {
          lnow = [2, 1];
          answer += "L";
        } else {
          if (hand === "right") {
            rnow = [2, 1];
            answer += "R";
          } else {
            lnow = [2, 1];
            answer += "L";
          }
        }
        break;

      case 9:
        rnow = [2, 2];
        answer += "R";
        break;

      default:
        break;
    }
  });
  return answer;
}
let numbers = [0, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
let hand = "right";

console.log(solution(numbers, hand));
