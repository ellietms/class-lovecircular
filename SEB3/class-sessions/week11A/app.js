// debugging
let scores = [0, 12, 20, 29, 11, 25, 17];

let myAddress = {
  streetName: "London",
  flatNum: 20,
};

// filter - joshu

let filterResult = scores.filter((myScore) => myScore > 20);

// splice - aqsa
// add

scores.splice(2, 0, "Feb");

// replace

scores.splice(2, 0, "March");
// remove

scores.splice(3, 1);

// promises -  joseph

let promiseValue = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve("foo");
  }, 300)
);
