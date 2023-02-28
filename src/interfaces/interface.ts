// INTERFACES

interface isPerson {
    name: string,
    age: number
}

const me: isPerson = {
    name: "ABD",
    age: 20
}

// CAN BE USED IN A FUNCTION PARAMETER
const personFunction = (person: isPerson) => {
    console.log("Hello", person.name)
}

personFunction(me);

export interface HasOutputString {
    outputString(): string
}