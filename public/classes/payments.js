// MODULES
export class Payment {
    constructor(recipient, detail, amount) {
        this.recipient = recipient;
        this.detail = detail;
        this.amount = amount;
    }
    outputString() {
        return `${this.recipient} is owed NGN ${this.amount} for ${this.detail}`;
    }
}
