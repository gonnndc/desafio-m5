const imagePapel = require("url:../../static/papel.svg");
const imagePiedra = require("url:../../static/piedra.svg");
const imageTijera = require("url:../../static/tijera.svg");

import { state } from "../../state";

export const initHandsComp = (params) => {
  class HandsComp extends HTMLElement {
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
      div.innerHTML = `
                <img class="papelEl" src=${imagePapel}>
                <img class="piedraEl" src=${imagePiedra}>
                <img class="tijeraEl" src=${imageTijera}>
            `;

      style.innerHTML = `
               img{
                    width:100px;
                    height:200px;
                }

                @media (min-width:769px){
                  img{
                    width:200px;
                    height:350px;
                  }
                }
                
                .piedraDown, .tijeraDown, .papelDown{
                  opacity:0.5;
                  position:relative;
                  top:40px;
                }
            
            `;

      const papel: any = div.querySelector(".papelEl");
      const piedra: any = div.querySelector(".piedraEl");
      const tijera: any = div.querySelector(".tijeraEl");

      if (this.getAttribute("variant") == "election") {

        style.innerHTML += `

        @media (min-width:769px){
          img{
            width:400px;
          }
        }
        
        `

        papel.addEventListener("click", () => {
          piedra.classList.toggle("piedraDown");
          tijera.classList.toggle("tijeraDown");
          setTimeout(() => {
            state.setMove("papel");
            params.goTo("/versus");
          }, 1000);
        });
        piedra.addEventListener("click", () => {
          papel.classList.toggle("papelDown");
          tijera.classList.toggle("tijeraDown");
          setTimeout(() => {
            state.setMove("piedra");
            params.goTo("/versus");
          }, 1000);
        });
        tijera.addEventListener("click", () => {
          piedra.classList.toggle("piedraDown");
          papel.classList.toggle("papelDown");
          setTimeout(() => {
            state.setMove("tijera");
            params.goTo("/versus");
          }, 1000);
        });
      }
      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }

  customElements.define("hands-comp", HandsComp);
};
