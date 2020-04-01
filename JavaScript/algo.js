// n = 7;
n = process.argv[2];
Arr = [];
for (let i = 1; i <= (n - 1) / 2; i += 2) {
  a = i;
  b = n % 2 == 1 ? n - i : n - i + 1;
  c = n - (n % 2 == 1 ? i - 1 : i - 2);
  d = i - 1;

  c = c > n ? "x" : c;

  Arr.push(`(${a}-${b}, ${c}-${d})`);
}

console.log(Arr);
