import { state } from "../../state";
const winner = require("url:../../static/papel.svg");
const loser = require("url:../../static/piedra.svg");

export function initPageFinal(params) {
  class PageFinal extends HTMLElement {
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
      const {} = state.getState();


      div.setAttribute("class", "div");

      div.innerHTML = `
        <img class="" src=${winner}>
        `;

      style.innerHTML = `

          .div{
            display:flex;
            flex-direction:column;
            align-items:center;
            font-size : 70px;
            color: #141414;
            font-family: 'Odibee Sans', cursive;
          }

          img{
            width:200px;
            height:300px;
            position:fixed;
          }

          .computerHand {
            top:0px;
            transform: rotate(180deg);
          }
          .myHand {
            bottom:0px;
        }

      `;
        
        
      setTimeout(() => {
        params.goTo("/final");
      }, 3000);

      div.appendChild(style);
      shadow.appendChild(div);
    }
  }

  

  if (!customElements.get("final-page")) {
    customElements.define("final-page", PageFinal);
  } else {
    customElements.define(`final-page${Math.random()}`, PageFinal);
  }

  return "<final-page></final-page>";
}
