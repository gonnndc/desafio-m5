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
                    width:80px;
                    height:180px;
                }

                @media (min-width:769px){
                  img{
                    width:200px;
                    height:300px;
                    z-index:0;
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
            width:250px;
            height:350px;
          }
        }
        
        `;

        papel.addEventListener("click", () => {
          piedra.classList.add("piedraDown");
          tijera.classList.add("tijeraDown");
          setTimeout(() => {
            state.setMove("papel");
            params.goTo("/versus");
          }, 1000);
        });
        piedra.addEventListener("click", () => {
          papel.classList.add("papelDown");
          tijera.classList.add("tijeraDown");
          setTimeout(() => {
            state.setMove("piedra");
            params.goTo("/versus");
          }, 1000);
        });
        tijera.addEventListener("click", () => {
          piedra.classList.add("piedraDown");
          papel.classList.add("papelDown");
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
