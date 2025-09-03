const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const division = (a, b) => {
  return a / b;
};

// module.exports = add;
// default exporting using module.exports
module.exports = { add, sub, division };
