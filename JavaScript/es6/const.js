(() => {
  const list = ["a", "b", "c"];
  list2 = [].concat(list, "d");
  console.log(typeof list2);
  console.log(list, list2);
})();

console.log(list2);
console.log(list);
