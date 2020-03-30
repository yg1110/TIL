const condition = true;
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("성공");
  } else {
    reject("실패");
  }
});

promise
  .then(message1 => {
    console.log(`message1 : ${message1}`);
    return new Promise((resolve, reject) => {
      resolve(message1);
    });
  })
  .then(message2 => {
    console.log(`message2 : ${message2}`);
    return new Promise((resolve, reject) => {
      resolve(message2);
    });
  })
  .then(message3 => {
    console.log(`message3 : ${message3}`);
  })
  .catch(error => {
    console.error(error);
  });
