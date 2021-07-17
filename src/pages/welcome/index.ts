import "../../components/emergent";
import { state } from '../../state';

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
      const modal = document.createElement("div");

      modal.setAttribute("class", "modal");
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

        .modal{
          z-index:100;
          background-color:#009048;
          display:flex;
          align-items:center;
          border-radius:10px;
          padding: 0 10px;
          width:80%;
          height:200px;
          max-width:300px;
          position:absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
        }

      `;

      const result = localStorage.getItem("state");
      // const { myWin, computerWin } = state.data.history
      if (result) {
        modal.innerHTML = `<emergent-comp></emergent-comp>`;
        div.appendChild(modal);
        containerElements.style.opacity = "0.5";
        containerElements.style.display = "none";
        containerImgs.style.opacity = "0.5";
        setTimeout(() => {
          modal.firstChild.remove();
          modal.removeAttribute('class')
          containerElements.style.opacity = "1";
          containerImgs.style.opacity = "1";
          containerImgs.style.transition = "ease 2s";;
          containerElements.style.display = "flex";
        }, 2500);
      }

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
