const array = ["nodejs", {}, 10, true];

// let node = array[0];
// let obj = array[1];
// let bool = array[3];
// console.log(`${node} ${JSON.stringify(obj)} ${bool}`);

const [node, obj, , bool] = array;
console.log(`${node} ${JSON.stringify(obj)} ${bool}`);
