export class EmergentComponent extends HTMLElement {
  constructor() {
    super();
    this.syncState();
  }

  syncState() {
    this.render();
  }

  render() {
    const shadow = this.attachShadow({ mode: "open" });
    const div = document.createElement("div");
    const style = document.createElement("style");

    div.innerHTML = `<text-comp variant="recovery"></text-comp>`
      
    style.innerHTML += `
            div{
                display:flex;
                align-items:center;
                justify-content:center;
            }
        `;

    shadow.appendChild(style);
    shadow.appendChild(div);
  }
}

customElements.define("emergent-comp", EmergentComponent);
