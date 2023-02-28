import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payments.js";
import { HasOutputString } from "./interfaces/interface.js";
import { OutputTemplate } from "./classes/outputTemplate.js";

// declaring variables of HasOutputString Inteface
let invoiceOne: HasOutputString;
let paymentOne: HasOutputString;

invoiceOne = new Invoice("Que Sera", "french class", 2000);
paymentOne = new Payment("Lorelei", "woodwork", 3000);

// defining an array of HasOutputString interface
const exampleArray: HasOutputString[] = [];

exampleArray.push(invoiceOne);
exampleArray.push(paymentOne);

console.log(exampleArray);

// Creating a new object based off a class
const firstInvoice = new Invoice("ABD", "Porsche", 150000000);

console.log(firstInvoice);

// BASIC STUFF
const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// UL OUTPUT LIST
const ul = document.querySelector("ul")!;
const list = new OutputTemplate(ul);

form.addEventListener("submit", (e: Event) => {
	e.preventDefault();

	let formData: HasOutputString;
	formData =
		type.value === "invoice"
			? new Invoice(toFrom.value, details.value, amount.valueAsNumber)
			: new Payment(toFrom.value, details.value, amount.valueAsNumber);

	console.log(formData);

	list.render(formData, type.value, "bottom");
});


// GENERICS

const addUID = <T extends object>(obj: T) => {
    const uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}

const exampleOne = addUID({name: "ABD"});

// GENERICS with INTERFACE

interface GenericExample <T> {
    uid: number;
    bullName: string;
    data: T;
}

const stringExample: GenericExample<string> = {
    uid: 1234,
    bullName: "sdfgnhdfv sdfhj",
    data: "has to be a string sha"
}

const numberExample: GenericExample<number> = {
    uid: 2345,
    bullName: "asdfg",
    data: 9,
}