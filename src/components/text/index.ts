export function initTextComp() {
  class TextComponent extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      const style = document.createElement("style");

      if (this.getAttribute("variant") == "title") {
        div.innerHTML = `
                <h1 class="title">

                Piedra Papel ó Tijera
          
                </h1>
                `;
        style.innerHTML = `

                div{
                    width:250px;
                    margin: 0 auto;
                    padding-top:50px;
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                }

                .title {
                color: #009048;
                font-weight: bold;
                font-size: 90px;
                margin: 0;
                letter-spacing: 5px;
                font-family: 'Odibee Sans', cursive;
                text-align:center;
                }

                @media (min-width:769px){
                    div{
                        width:300px;
                    }
                    .title{
                      font-size : 95px;
                    }
                }
                
            
            `;
      }

      if (this.getAttribute("variant") == "election") {
        div.innerHTML = `
                <h3 class="election">

                Presioná jugar
                y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.

                </h3>
                `;
        style.innerHTML = `
                .election {
                    font-size : 40px;
                    color: #141414;
                    letter-spacing: 3px;
                    font-family: 'Odibee Sans', cursive;
                    text-align:center;
                }
                
                @media (min-width:769px){
                    .election{
                      font-size : 60px;
                    }
                  }
            `;
      }

      shadow.appendChild(div);
      shadow.appendChild(style);
    }
  }
  customElements.define("text-comp", TextComponent);
}
