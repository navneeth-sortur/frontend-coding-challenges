require("./solution");

// Test object
const person = { name: "John" };

// Test function
function greet(greeting, punctuation) {
  return `${greeting} ${this.name}${punctuation}`;
}

console.log("=== Testing myCall ===");
console.log(greet.myCall(person, "Hello", "!"));
// // Expected: "Hello John!"

console.log("\n=== Testing myApply ===");
console.log(greet.myApply(person, ["Hi", "!!"]));
// // Expected: "Hi John!!"

console.log("\n=== Testing myBind ===");
const boundGreet = greet.myBind(person, "Hey");
console.log(boundGreet("!!!"));
// Expected: "Hey John!!!"

console.log("\n=== Testing myBind as constructor ===");

function Animal(type, sound) {
  this.type = type;
  this.sound = sound;
}

const BoundAnimal = Animal.myBind(null, "Dog");
const pet = new BoundAnimal("Bark");

console.log(pet.type); // Dog   (from bound args)
console.log(pet.sound); // Bark  (from constructor call args)

// Should preserve prototype
Animal.prototype.run = function () {
  return `${this.type} runs`;
};

console.log(pet.run()); // Expected: "Dog runs"
