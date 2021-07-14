import { state } from "../../state";

export function initPageElection(params) {
  class PageElection extends HTMLElement {
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
      const preload = document.createElement("div");
      const containerCount = document.createElement("div");
      const style = document.createElement("style");
      const containerImgs = document.createElement("div");

      div.setAttribute("class", "div");
      preload.setAttribute("class", "preload");
      containerCount.setAttribute("class", "container__count");
      containerImgs.setAttribute("class", "container__imgs");

      containerImgs.innerHTML = `<hands-comp variant="election"></hands-comp>`;

      style.innerHTML = `

          .div{
            display:flex;
            flex-direction:column;
            align-items:center;
            font-size : 70px;
            color: #141414;
            font-family: 'Odibee Sans', cursive;
          }

          .container__imgs{
            position:fixed;
            bottom:-20px;
            width:auto;
          }

          .container__count{
            padding-top:100px;
          }

          .preload {
            width: 200px;
            height: 200px;
            border: 20px solid #eee;
            border-top: 20px solid #141414;
            border-radius: 50%;
            position:relative;
            top:-150px;
          }
          

      `;

      function countdown(time, n) {
        containerCount.textContent = "3";
        containerImgs.addEventListener("click", () => {
          clearInterval(id);
        });
        var id = setInterval(function () {
          containerCount.textContent = n;
          if (n == 0) preload.style.borderLeft = "20px solid #141414";
          if (n == 1) preload.style.borderBottom = "20px solid #141414";
          if (n == 2) preload.style.borderRight = "20px solid #141414";
          if (n < 0) {
            preload.style.border = "20px solid #141414";
            clearInterval(id);
            params.goTo("/desafio-m5/welcome");
          }
          n--;
        }, time);
      }
      countdown(1000, 3);

      div.appendChild(containerCount);
      div.appendChild(preload);
      div.appendChild(containerImgs);
      div.appendChild(style);
      shadow.appendChild(div);
    }
  }

  if (!customElements.get("election-page")) {
    customElements.define("election-page", PageElection);
  } else {
    customElements.define(`election-page${Math.random()}`, PageElection);
  }

  return "<election-page></election-page>";
}
