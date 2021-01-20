function solution(s) {
  let stack = [];
  [...s].every(v => {
    switch (v) {
      case "(":
        stack.push("(");
        break;
      default:
        if (stack.length !== 0) {
          stack.pop();
        } else {
          stack.push(")");
          return false;
        }
        break;
    }
    return true;
  });

  return stack.length === 0 ? true : false;
}

const s = ["()()", "(())()", ")()(", "(()("];
console.log(solution(s[0]));
console.log(solution(s[1]));
console.log(solution(s[2]));
console.log(solution(s[3]));
