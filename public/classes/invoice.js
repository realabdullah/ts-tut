// MODULES
export class Invoice {
    constructor(client, detail, amount) {
        this.client = client;
        this.detail = detail;
        this.amount = amount;
    }
    outputString() {
        return `${this.client} paid NGN ${this.amount} for ${this.detail}`;
    }
}
