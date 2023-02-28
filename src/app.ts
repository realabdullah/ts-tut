// CLASSES
class Invoice {
    client: string;
    detail: string;
    amount: number;

    constructor(client: string, detail: string, amount: number) {
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
const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    );
});