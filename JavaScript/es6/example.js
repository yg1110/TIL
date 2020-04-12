var list = document.querySelectorAll("li");
(function() {
  let arr = Array.from(arguments[0]);

  let ans = arr.filter(v => {
    return [v].includes("e");
  });
  console.log(ans);
})(list);
