// INTERFACES
const me = {
    name: "ABD",
    age: 20
};
// CAN BE USED IN A FUNCTION PARAMETER
const personFunction = (person) => {
    console.log("Hello", person.name);
};
personFunction(me);
export {};
