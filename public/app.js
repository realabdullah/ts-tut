"use strict";
// CLASSES
class Invoice {
    constructor(client, detail, amount) {
        this.client = client;
        this.detail = detail;
        this.amount = amount;
    }
    outputString() {
        return `${this.client} paid NGN ${this.amount} for ${this.detail}`;
    }
}
const firstInvoice = new Invoice('ABD', 'Porsche', 150000000);
// BASIC STUFF
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
