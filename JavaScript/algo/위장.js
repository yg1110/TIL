function solution(clothes) {
  let answer = 1;

  let cloth =
    Object.values(
      clothes.reduce((obj, t) => {
        obj[t[1]] = obj[t[1]] === undefined ? 1 : obj[t[1]] + 1;
        return obj;
      }, {})
    ).reduce((a, b) => a * (b + 1), 1) - 1;
  console.log(cloth);
  //   for (let c in cloth) {
  //     answer *= cloth[c].length + 1;
  //   }
  //   return answer - 1;
}
clothes = [
  [
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"]
  ],
  [
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"]
  ]
];

solution(clothes[0]);
