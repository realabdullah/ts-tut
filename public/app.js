import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payments.js";
import { OutputTemplate } from "./classes/outputTemplate.js";
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
// UL OUTPUT LIST
const ul = document.querySelector("ul");
const list = new OutputTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData;
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    formData =
        type.value === "invoice"
            ? new Invoice(...values)
            : new Payment(...values);
    console.log(formData);
    list.render(formData, type.value, "bottom");
});
// GENERICS
const addUID = (obj) => {
    const uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
const exampleOne = addUID({ name: "ABD" });
// ENUMS
var bullNumber;
(function (bullNumber) {
    bullNumber[bullNumber["ADD"] = 0] = "ADD";
    bullNumber[bullNumber["SUB"] = 1] = "SUB";
    bullNumber[bullNumber["PEN"] = 2] = "PEN";
    bullNumber[bullNumber["BED"] = 3] = "BED";
})(bullNumber || (bullNumber = {}));
const stringExample = {
    uid: 1234,
    bullNumber: bullNumber.SUB,
    data: "has to be a string sha"
};
const numberExample = {
    uid: 2345,
    bullNumber: bullNumber.ADD,
    data: 9,
};
// TUPLES
let tuple;
tuple = ["abd", 33, true];
