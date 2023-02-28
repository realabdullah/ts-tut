export class OutputTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, header, position) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        const p = document.createElement("p");
        h4.innerText = header;
        li.append(h4);
        p.innerText = item.outputString();
        li.append(p);
        if (position === "top") {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
