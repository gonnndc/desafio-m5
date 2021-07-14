export function initPageWelcome(params) {
  class PageWelcome extends HTMLElement {
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
      const containerImgs = document.createElement("div");
      const containerElements = document.createElement("div");
      const style = document.createElement("style");

      div.setAttribute("class", "container");
      containerElements.setAttribute("class", "container__elements");
      containerImgs.setAttribute("class", "container__imgs");
      containerImgs.innerHTML = `<hands-comp variant="welcome"></hands-comp>`;

      containerElements.innerHTML = `
      
      <text-comp variant="title"></text-comp>
      <button-comp text="Empezar"><button-comp>
      `;

      style.innerHTML = `
        .container__imgs{
          position:fixed;
          bottom:-5px;
        }

        .container__elements{
          display:flex;
          flex-direction:column;
          z-index:10;
        }

        .container__imgs div{
          margin: 0 20px;
        }

        .container{
          height:100vh;
          display:flex;
          flex-direction:column;
          align-items:center;
        }

      `;

      div.appendChild(style);
      div.appendChild(containerImgs);
      div.appendChild(containerElements);
      shadow.appendChild(div);
    }
  }
  if (!customElements.get("welcome-page")) {
    customElements.define("welcome-page", PageWelcome);
  } else {
    customElements.define(`welcome-page${Math.random()}`, PageWelcome);
  }

  return "<welcome-page></welcome-page>";
}
