let limit = 201;
let start = 100;
let pr = 100;
while (start < limit) {
  if (start % 3 === 0 && start % 4 !== 0 ) {
    pr = "Loopy";
  } else if (start % 4 === 0 && start % 3 !== 0) {
    pr = "Lighthouse";
  } else if (start % 12 === 0) {
    pr = "LoopyLighthouse";
  } else {
    pr = start;
  }
  console.log(pr);
  start++;
}
