import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payments.js";
// declaring variables of HasOutputString Inteface
let invoiceOne;
let paymentOne;
invoiceOne = new Invoice("Que Sera", "french class", 2000);
paymentOne = new Payment("Lorelei", "woodwork", 3000);
// defining an array of HasOutputString interface
const exampleArray = [];
exampleArray.push(invoiceOne);
exampleArray.push(paymentOne);
console.log(exampleArray);
// Creating a new object based off a class
const firstInvoice = new Invoice("ABD", "Porsche", 150000000);
console.log(firstInvoice);
// BASIC STUFF
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData;
    formData =
        type.value === "invoice"
            ? new Invoice(toFrom.value, details.value, amount.valueAsNumber)
            : new Payment(toFrom.value, details.value, amount.valueAsNumber);
    console.log(formData);
});
