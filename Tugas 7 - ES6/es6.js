//Nomer 1
console.log("Nomer 1");
const golden = () => {
  console.log("this is golden!!");
};
golden();
console.log("\n");

//Nomer 2
console.log("Nomer 2");
const newFunction = (firstName, lastName) => {
  return {
    fullName() {
      console.log(`${firstName} ${lastName}`);
    },
  };
};
newFunction("william", "imoh").fullName();
console.log("\n");

//Nomer 3
console.log("Nomer 3");
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!",
};
const { firstName, lastName, destination, occupation, spell } = newObject;
console.log(firstName, lastName, destination, occupation);
console.log("\n");

//Nomer 4
console.log("Nomer 4");
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];
console.log(combined);
console.log("\n");

//Nomer 5
console.log("Nomer 5");
const planet = "earth";
const view = "glass";
var before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`;
console.log(before);
console.log("\n");
