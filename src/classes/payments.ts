// MODULES

import { HasOutputString } from "../interfaces/interface.js";

export class Payment implements HasOutputString {
    recipient: string;
    detail: string;
    amount: number;

    constructor(recipient: string, detail: string, amount: number) {
        this.recipient = recipient;
        this.detail = detail;
        this.amount = amount;
    }

    outputString() {
        return `${this.recipient} is owed NGN ${this.amount} for ${this.detail}`;
    }
}