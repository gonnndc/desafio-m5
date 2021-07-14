import { state } from "../../state";
const papel = require("url:../../static/papel.svg");
const piedra = require("url:../../static/piedra.svg");
const tijera = require("url:../../static/tijera.svg");
const win = require("url:../../static/ganaste.svg");
const lose = require("url:../../static/perdiste.svg");

export function initPageVersus(params) {
  class PageVersus extends HTMLElement {
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
      const background = document.createElement("div");
      const card = document.createElement("div");
      const containerButton= document.createElement("div");
      const style = document.createElement("style");
      const currentState = state.getState();

      

      div.setAttribute("class", "div");
      background.setAttribute("class", "background");
      card.setAttribute("class", "card");

      const myPlay =
        currentState.currentGame.myPlay == "piedra"
          ? piedra
          : currentState.currentGame.myPlay == "papel"
          ? papel
          : tijera;
      const computerPlay =
        currentState.currentGame.computerPlay == "piedra"
          ? piedra
          : currentState.currentGame.computerPlay == "papel"
          ? papel
          : tijera;


      div.innerHTML = `
        <img class="computerHand" src=${computerPlay}>
        <img class="myHand" src=${myPlay}>
        `;

      setTimeout(() => {
        const result = state.whoWins()

        if ( result == "win") {
          div.appendChild(background);
          background.innerHTML = `
            <img class="win" src=${win}>
          `;
          background.style.backgroundColor = "rgba(136, 137, 73, 0.9)";
        }
        if (result == "lose") {
          div.appendChild(background);
          background.innerHTML = `
            <img class="lose" src=${lose}>
          `;
          background.style.backgroundColor = "rgba(137, 73, 73, 0.9)";
        }
        
        if (result == "tie"){
          div.appendChild(background);
          background.innerHTML = `
          <span class="tie" style="color:#fafafa">Empate</span>
          `;
          background.style.backgroundColor = "rgba(50, 30, 90, 0.9)";
        }

        card.innerHTML = `
          <h3>Score</h3>
          <div class="span-container">
            <span>Vos: ${currentState.history.myWin}</span>
            <span>Máquina: ${currentState.history.computerWin}</span>
          <div>
        `;

        containerButton.innerHTML = `
        <button-comp text="Volver a jugar"></button-comp>
        <button-comp color="invert" text="Reiniciar puntaje"></button-comp>
        `
        
        background.appendChild(card);
        background.appendChild(containerButton);
        
      }, 3500);

      style.innerHTML = `

          div{
            box-sizing:border-box;
            margin:0px;
            padding:0px;
          }

          .div{
            display:flex;
            flex-direction:column;
            align-items:center;
            font-size : 50px;
            color: #141414;
            font-family: 'Odibee Sans', cursive;
            width:100%;
          }

          h3{
            text-align:center;
            margin:0;
          }

          img{
            width:200px;
            height:300px;
            position:fixed;
          }

          @media (min-width:769px){
            img{
              width:250px;
              height:400px;
            }
          }

          .win, .lose {
            position:static;
            height:150px;
          }

          @media (min-width:769px){
            .win, .lose {
              position:static;
              height:250px;
            }
          }


          .tie{
            font-size:40px;
          }

          @media (min-width:769px){
            .tie{
              font-size:80px;
            }
          }



          .computerHand {
            top:0px;
            transform: rotate(180deg);
            height:200px;
          }
          .myHand {
            bottom:0px;
            height:200px;
          }

          @media (min-width:769px){
            .computerHand, .myHand {
              height:320px;
            }
          }

          @media (min-width:1200px){
            .computerHand, .myHand {
              height:400px;
            }
          }


          .background{
            width:100%;
            height:100vh;
            z-index:1;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            gap:20px;
          }

          .card{
            border: 10px solid #141414;
            border-radius: 10px;
            background-color:#fafafa;
            width:300px;
            max-width:500px;
          }

          .span-container{
            display:flex;
            flex-direction:column;
            align-items:flex-end;
            font-family: 'Odibee Sans', cursive;
            padding:20px;
          }

      `;

      div.appendChild(style);
      shadow.appendChild(div);
    }
  }

  if (!customElements.get("versus-page")) {
    customElements.define("versus-page", PageVersus);
  } else {
    customElements.define(`versus-page${Math.random()}`, PageVersus);
  }

  return "<versus-page></versus-page>";
}
