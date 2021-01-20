setImmediate(() => {
  console.log("immediate");
});

process.nextTick(() => {
  console.log("nextTick");
});

process.nextTick(() => {
  console.log("nextTick2");
});

setTimeout(() => {
  console.log("timeout");
}, 0);

Promise.resolve().then(() => console.log("promise"));
(() => console.log(this))();
(function() {
  console.log(this);
})();
