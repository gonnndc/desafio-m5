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
        localStorage.setItem("state", JSON.stringify(state.getState()));
        if (this.textContent == "Empezar") {
          params.goTo("/desafio-m5/instruction");
        }
        if (this.textContent == "Jugar") {
          params.goTo("/desafio-m5/election");
        }
        if (this.textContent == "Volver a jugar") {
          params.goTo("/desafio-m5/welcome");
        }
        if (this.textContent == "Reiniciar puntaje") {
          state.setState({
            ...state.getState(),
            history: {
              computerWin: 0,
              myWin: 0,
            },
          });
          params.goTo("/desafio-m5/welcome");
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
