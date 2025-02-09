let jj = [2, 5, 7, 10];

console.log(
  jj.map((number) => {
    return number * 2;
  })
);
console.log(
  jj.filter((number) => {
    return number >= 7;
  })
);
console.log(
  jj.reduce((firstNum, lastNum) => {
    return firstNum - lastNum;
  })
);
