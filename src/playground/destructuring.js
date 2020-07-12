/***************Object Destructuring***********************/

const person = {
  name: "Jonas",
  age: 19,
  location: {
    city: "Rabat",
    country: "Morocco",
    temp: 27,
  },
};

const { name = "Anonymous", age } = person;

const { city: c = "WAlo", country } = person.location;

console.log(`${name} is ${age} years old`);

console.log(`${c} capital of  ${country}`);

/***************Array Destructuring***********************/

const names = ["Jonas", "Evelyn", "Casey", "Ernest", "Joseph"];

const [, one, two, three, four, five = "Anonymous"] = names;

console.log(`${names[0]} ${one} ${two} ${three} ${four} ${five}`);
