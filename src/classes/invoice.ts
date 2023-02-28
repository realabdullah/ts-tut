// MODULES

import { HasOutputString } from "../interfaces/interface.js";

export class Invoice implements HasOutputString {
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