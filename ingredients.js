const ingredients = [
  "eggs",
  "milk",
  "flour",
  "sugar",
  "baking soda",
  "baking powder",
  "chocolate chips",
  "bananas",
];

// Write a while loop that prints out the contents of ingredients:
let limit = 0;
while (limit < ingredients.length) {
  console.log(ingredients[limit]);
  limit++;
}

// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let i = ingredients.length - 1; i > -1; i--) {
  console.log(ingredients[i]);
}
