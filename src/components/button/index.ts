import { state } from "../../state";

export function initButtonComp(params) {
  class ButtonComponent extends HTMLElement {
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
      const button = document.createElement("button");
      button.setAttribute("class", "button");

      style.innerHTML = `

          .button{
            margin-top:20px;
            min-width:300px;
            height:87px;
            background-color:#141414;
            border-radius: 10px;
            border: 10px groove #4C4C4C;
            font-size:50px;
            color:#Fafafa;
            font-family: 'Odibee Sans', cursive;
            z-index:20;
          }
          
      `;

      if (this.getAttribute("color") == "invert") {
        style.innerHTML += `
        .button{
          background-color:#Fafafa;
          border: 10px groove #4C4C4C;
          color:#141414;
        }
        `;
      }


      this.textContent = this.getAttribute("text");
      button.addEventListener("click", () => {
        
        if (this.textContent == "Empezar") {
          params.goTo("/instruction");
        }
        if (this.textContent == "Jugar") {
          params.goTo("/election");
        }
        if (this.textContent == "Volver a jugar") {
          params.goTo("/election");
        }
        if (this.textContent == "Reiniciar puntaje") {
          state.setState({
            ...state.getState(),
            history: {
              computerWin: 0,
              myWin: 0,
            },
          });
          localStorage.removeItem("state")
          params.goTo("/");
        }
      });

      button.textContent = this.textContent;
      shadow.appendChild(div);
      shadow.appendChild(style);
      div.appendChild(button);
    }
  }
  customElements.define("button-comp", ButtonComponent);
}
