var list = document.querySelectorAll("li");
// var를 할경우 4나옴
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function() {
    console.log(i);
  });
}

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function() {
    console.log(i);
  });
}
