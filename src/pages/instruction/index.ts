
export function initPageInstruction(params) {
  class PageInstruction extends HTMLElement {
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
      div.setAttribute("class", "div");
      const style = document.createElement("style");
      const containerImgs = document.createElement("div");
      containerImgs.setAttribute("class", "container__imgs");
      containerImgs.innerHTML = `<hands-comp variant="welcome"></hands-comp>`;

      div.innerHTML = `
        <div class="container">
        <text-comp variant="election"></text-comp>
        <button-comp text="Jugar"><button-comp>
        <div>
      `;

      style.innerHTML = `
          .div{
            display:flex;
            flex-direction:column;
            align-items:center;
          }
          .container{
            width:90%;
            max-width:500px;
            margin: 0 auto;
            display:flex;
            flex-direction:column;
            align-items:center;
          }

          .container__imgs{
            position:fixed;
            bottom:-5px;
          }
      `;

      div.appendChild(containerImgs);
      div.appendChild(style);
      shadow.appendChild(div);
    }
  }

  if (!customElements.get("instruction-page")) {
    customElements.define("instruction-page", PageInstruction);
  } else {
    customElements.define(`instruction-page${Math.random()}`, PageInstruction);
  }

  return "<instruction-page></instruction-page>";
}