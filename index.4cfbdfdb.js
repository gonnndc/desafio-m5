var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=e.parcelRequire79af;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){let i=t[e];delete t[e];let o={id:e,exports:{}};return n[e]=o,i.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequire79af=i);const o={data:{currentGame:{computerPlay:"",myPlay:""},history:{computerWin:0,myWin:0}},getState(){return this.data},setState(e){this.data=e},setMove(e){const{currentGame:n}=this.getState();n.myPlay=e,n.computerPlay=["papel","piedra","tijera"][Math.floor(2*Math.random())],this.historyState()},whoWins(){const{currentGame:e}=this.getState(),n=e.myPlay,t=e.computerPlay;return"papel"==n&&"piedra"==t||"tijera"==n&&"papel"==t||"piedra"==n&&"tijera"==t?"win":n==t?"tie":"lose"},historyState(){const e=this.whoWins(),n=this.getState(),t=n.history.myWin,i=n.history.computerWin;"win"==e&&this.setState({...n,history:{myWin:t+1,computerWin:i}}),"lose"==e&&this.setState({...n,history:{myWin:t,computerWin:i+1}}),localStorage.setItem("state",JSON.stringify(o.getState()))}};var a;i.register("vNK0r",(function(e,n){var t,i,o,a,r;t=e.exports,i="getBundleURL",o=()=>r,a=e=>r=e,Object.defineProperty(t,i,{get:o,set:a,enumerable:!0,configurable:!0});var s=null;function c(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(){return s||(s=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return c(e[0])}return"/"}()),s}})),a=i("vNK0r").getBundleURL()+"papel.03674ea8.svg";var r;r=i("vNK0r").getBundleURL()+"piedra.86b79d4e.svg";var s;s=i("vNK0r").getBundleURL()+"tijera.7654e1cf.svg";const c=e=>{class n extends HTMLElement{constructor(){super(),this.syncState()}syncState(){this.render()}render(){const n=this.attachShadow({mode:"open"}),t=document.createElement("div"),i=document.createElement("style");t.innerHTML=`\n                <img class="papelEl" src=${a}>\n                <img class="piedraEl" src=${r}>\n                <img class="tijeraEl" src=${s}>\n            `,i.innerHTML="\n\n              \n               img{\n                    width:80px;\n                    height:180px;\n                }\n\n                @media (min-width:769px){\n                  img{\n                    width:200px;\n                    height:300px;\n                    z-index:0;\n                  }\n                }\n                \n                .piedraDown, .tijeraDown, .papelDown{\n                  opacity:0.5;\n                  position:relative;\n                  top:40px;\n                }\n            \n            ";const c=t.querySelector(".papelEl"),d=t.querySelector(".piedraEl"),l=t.querySelector(".tijeraEl");"election"==this.getAttribute("variant")&&(i.innerHTML+="\n\n        @media (min-width:769px){\n          img{\n            width:250px;\n            height:350px;\n          }\n        }\n        \n        ",c.addEventListener("click",(()=>{d.classList.add("piedraDown"),l.classList.add("tijeraDown"),setTimeout((()=>{o.setMove("papel"),e.goTo("/versus")}),1e3)})),d.addEventListener("click",(()=>{c.classList.add("papelDown"),l.classList.add("tijeraDown"),setTimeout((()=>{o.setMove("piedra"),e.goTo("/versus")}),1e3)})),l.addEventListener("click",(()=>{d.classList.add("piedraDown"),c.classList.add("papelDown"),setTimeout((()=>{o.setMove("tijera"),e.goTo("/versus")}),1e3)}))),n.appendChild(i),n.appendChild(t)}}customElements.define("hands-comp",n)};var d;d=i("vNK0r").getBundleURL()+"ganaste.5ece265f.svg";var l;l=i("vNK0r").getBundleURL()+"perdiste.6da996ab.svg";class p extends HTMLElement{constructor(){super(),this.syncState()}syncState(){this.render()}render(){const e=this.attachShadow({mode:"open"}),n=document.createElement("div"),t=document.createElement("style");n.innerHTML='<text-comp variant="recovery"></text-comp>',t.innerHTML+="\n            div{\n                display:flex;\n                align-items:center;\n                justify-content:center;\n            }\n        ",e.appendChild(t),e.appendChild(n)}}customElements.define("emergent-comp",p);const m=[{path:/\//,component:function(e){class n extends HTMLElement{constructor(){super(),this.syncState()}syncState(){this.render()}render(){const e=this.attachShadow({mode:"open"}),n=document.createElement("div"),t=document.createElement("div"),i=document.createElement("div"),o=document.createElement("style"),a=document.createElement("div");a.setAttribute("class","modal"),n.setAttribute("class","container"),i.setAttribute("class","container__elements"),t.setAttribute("class","container__imgs"),t.innerHTML='<hands-comp variant="welcome"></hands-comp>',i.innerHTML='\n      \n      <text-comp variant="title"></text-comp>\n      <button-comp text="Empezar"><button-comp>\n      ',o.innerHTML="\n        .container__imgs{\n          position:fixed;\n          bottom:-5px;\n        }\n\n        .container__elements{\n          display:flex;\n          flex-direction:column;\n          z-index:10;\n        }\n\n        .container__imgs div{\n          margin: 0 20px;\n        }\n\n\n        .container{\n          height:100vh;\n          display:flex;\n          flex-direction:column;\n          align-items:center;\n        }\n\n        .modal{\n          z-index:100;\n          background-color:#009048;\n          display:flex;\n          align-items:center;\n          border-radius:10px;\n          padding: 0 10px;\n          width:80%;\n          height:200px;\n          max-width:300px;\n          position:absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n        }\n\n      ";localStorage.getItem("state")&&(a.innerHTML="<emergent-comp></emergent-comp>",n.appendChild(a),i.style.opacity="0.5",i.style.display="none",t.style.opacity="0.5",setTimeout((()=>{a.firstChild.remove(),a.removeAttribute("class"),i.style.opacity="1",t.style.opacity="1",t.style.transition="ease 2s",i.style.display="flex"}),2500)),n.appendChild(o),n.appendChild(t),n.appendChild(i),e.appendChild(n)}}return customElements.get("welcome-page")?customElements.define(`welcome-page${Math.random()}`,n):customElements.define("welcome-page",n),"<welcome-page></welcome-page>"}},{path:/\/instruction/,component:function(e){class n extends HTMLElement{constructor(){super(),this.syncState()}syncState(){this.render()}render(){const e=this.attachShadow({mode:"open"}),n=document.createElement("div");n.setAttribute("class","div");const t=document.createElement("style"),i=document.createElement("div");i.setAttribute("class","container__imgs"),i.innerHTML='<hands-comp variant="welcome"></hands-comp>',n.innerHTML='\n        <div class="container">\n        <text-comp variant="election"></text-comp>\n        <button-comp text="Jugar"><button-comp>\n        <div>\n      ',t.innerHTML="\n          .div{\n            display:flex;\n            flex-direction:column;\n            align-items:center;\n          }\n\n\n          .container{\n            width:90%;\n            max-width:500px;\n            margin: 0 auto;\n            display:flex;\n            flex-direction:column;\n            align-items:center;\n            z-index:20;\n          }\n\n          .container__imgs{\n            position:fixed;\n            bottom:-5px;\n          }\n      ",n.appendChild(i),n.appendChild(t),e.appendChild(n)}}return customElements.get("instruction-page")?customElements.define(`instruction-page${Math.random()}`,n):customElements.define("instruction-page",n),"<instruction-page></instruction-page>"}},{path:/\/election/,component:function(e){class n extends HTMLElement{constructor(){super(),this.syncState()}syncState(){this.render()}render(){const n=this.attachShadow({mode:"open"}),t=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div"),a=document.createElement("style"),r=document.createElement("div");t.setAttribute("class","div"),i.setAttribute("class","preload"),o.setAttribute("class","container__count"),r.setAttribute("class","container__imgs"),r.innerHTML='<hands-comp variant="election"></hands-comp>',a.innerHTML="\n\n          .div{\n            display:flex;\n            flex-direction:column;\n            align-items:center;\n            font-size : 70px;\n            color: #141414;\n            font-family: 'Odibee Sans', cursive;\n          }\n\n          .container__imgs{\n            position:fixed;\n            bottom:-20px;\n            width:auto;\n          }\n\n          .container__count{\n            padding-top:100px;\n          }\n\n          .preload {\n            width: 200px;\n            height: 200px;\n            border: 20px solid #eee;\n            border-top: 20px solid #141414;\n            border-radius: 50%;\n            position:relative;\n            top:-150px;\n          }\n          \n\n      ",function(n,t){o.textContent="3",r.addEventListener("click",(()=>{clearInterval(a)}));var a=setInterval((function(){o.textContent=t,0==t&&(i.style.borderLeft="20px solid #141414"),1==t&&(i.style.borderBottom="20px solid #141414"),2==t&&(i.style.borderRight="20px solid #141414"),t<0&&(i.style.border="20px solid #141414",clearInterval(a),e.goTo("/")),t--}),n)}(1e3,3),t.appendChild(o),t.appendChild(i),t.appendChild(r),t.appendChild(a),n.appendChild(t)}}return customElements.get("election-page")?customElements.define(`election-page${Math.random()}`,n):customElements.define("election-page",n),"<election-page></election-page>"}},{path:/\/versus/,component:function(e){class n extends HTMLElement{constructor(){super(),this.syncState()}syncState(){this.render()}render(){const e=this.attachShadow({mode:"open"}),n=document.createElement("div"),t=document.createElement("div"),i=document.createElement("div"),c=document.createElement("div"),p=document.createElement("style"),m=o.getState();n.setAttribute("class","div"),t.setAttribute("class","background"),i.setAttribute("class","card");const u="piedra"==m.currentGame.myPlay?r:"papel"==m.currentGame.myPlay?a:s,h="piedra"==m.currentGame.computerPlay?r:"papel"==m.currentGame.computerPlay?a:s;n.innerHTML=`\n        <img class="computerHand" src=${h}>\n        <img class="myHand" src=${u}>\n        `,setTimeout((()=>{const e=o.whoWins();"win"==e&&(n.appendChild(t),t.innerHTML=`\n            <img class="win" src=${d}>\n          `,t.style.backgroundColor="rgba(136, 137, 73, 0.9)"),"lose"==e&&(n.appendChild(t),t.innerHTML=`\n            <img class="lose" src=${l}>\n          `,t.style.backgroundColor="rgba(137, 73, 73, 0.9)"),"tie"==e&&(n.appendChild(t),t.innerHTML='\n          <span class="tie" style="color:#fafafa">Empate</span>\n          ',t.style.backgroundColor="rgba(50, 30, 90, 0.9)"),i.innerHTML=`\n          <h3>Score</h3>\n          <div class="span-container">\n            <span>Vos: ${m.history.myWin}</span>\n            <span>Máquina: ${m.history.computerWin}</span>\n          <div>\n        `,c.innerHTML='\n        <button-comp text="Volver a jugar"></button-comp>\n        <button-comp color="invert" text="Reiniciar puntaje"></button-comp>\n        ',t.appendChild(i),t.appendChild(c)}),3500),p.innerHTML="\n\n          div{\n            box-sizing:border-box;\n            margin:0px;\n            padding:0px;\n          }\n\n          .div{\n            display:flex;\n            flex-direction:column;\n            align-items:center;\n            font-size : 50px;\n            color: #141414;\n            font-family: 'Odibee Sans', cursive;\n            width:100%;\n          }\n\n          h3{\n            text-align:center;\n            margin:0;\n          }\n\n          img{\n            width:200px;\n            height:300px;\n            position:fixed;\n          }\n\n          @media (min-width:769px){\n            img{\n              width:250px;\n              height:400px;\n            }\n          }\n\n          .win, .lose {\n            position:static;\n            height:150px;\n          }\n\n          @media (min-width:769px){\n            .win, .lose {\n              height:200px;\n            }\n          }\n\n          @media (min-width:1200px){\n            .win, .lose {\n              height:250px;\n            }\n          }\n\n\n          .tie{\n            font-size:40px;\n          }\n\n          @media (min-width:769px){\n            .tie{\n              font-size:80px;\n            }\n          }\n\n\n\n          .computerHand {\n            top:0px;\n            transform: rotate(180deg);\n            height:200px;\n          }\n          .myHand {\n            bottom:0px;\n            height:200px;\n          }\n\n          @media (min-width:769px){\n            .computerHand, .myHand {\n              height:250px;\n            }\n          }\n\n          @media (min-width:1200px){\n            .computerHand, .myHand {\n              height:400px;\n            }\n          }\n\n\n          .background{\n            width:100%;\n            height:100vh;\n            z-index:1;\n            display:flex;\n            flex-direction:column;\n            justify-content:space-evenly;\n            align-items:center;\n          }\n\n          .card{\n            border: 10px solid #141414;\n            border-radius: 10px;\n            background-color:#fafafa;\n            width:300px;\n            max-width:500px;\n          }\n\n          .span-container{\n            display:flex;\n            flex-direction:column;\n            align-items:flex-end;\n            font-family: 'Odibee Sans', cursive;\n            padding:20px;\n          }\n\n      ",n.appendChild(p),e.appendChild(n)}}return customElements.get("versus-page")?customElements.define(`versus-page${Math.random()}`,n):customElements.define("versus-page",n),"<versus-page></versus-page>"}}];function u(e){function n(e){history.pushState({},"",e),t(e.replace("/desafio-m5/",""))}function t(t){for(const i of m)i.path.test(t)&&(e.firstChild&&e.firstChild.remove(),e.innerHTML=i.component({goTo:n}))}c({goTo:n}),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),n=document.createElement("div"),t=document.createElement("style");"title"==this.getAttribute("variant")&&(n.innerHTML='\n                <h1 class="title">\n\n                Piedra Papel ó Tijera\n          \n                </h1>\n                ',t.innerHTML="\n\n                div{\n                    width:250px;\n                    margin: 0 auto;\n                    padding-top:50px;\n                    display:flex;\n                    flex-direction:column;\n                    justify-content:center;\n                }\n\n                .title {\n                color: #009048;\n                font-weight: bold;\n                font-size: 90px;\n                margin: 0;\n                letter-spacing: 5px;\n                font-family: 'Odibee Sans', cursive;\n                text-align:center;\n                }\n\n                @media (min-width:769px){\n                    div{\n                        width:300px;\n                    }\n                    .title{\n                      font-size : 95px;\n                    }\n                }\n                \n            \n            "),"election"==this.getAttribute("variant")&&(n.innerHTML='\n                <h3 class="election">\n\n                Presioná jugar\n                y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.\n\n                </h3>\n                ',t.innerHTML="\n                .election {\n                    font-size : 40px;\n                    color: #141414;\n                    letter-spacing: 3px;\n                    font-family: 'Odibee Sans', cursive;\n                    text-align:center;\n                }\n                \n                @media (min-width:769px){\n                    .election{\n                      font-size : 60px;\n                    }\n                  }\n            "),"recovery"==this.getAttribute("variant")&&(n.innerHTML='\n                <h3 class="election">\n\n                Recuperando los datos de su partida anterior\n\n                </h3>\n                ',t.innerHTML="\n                .election {\n                    font-size : 30px;\n                    color: #141414;\n                    letter-spacing: 3px;\n                    font-family: 'Odibee Sans', cursive;\n                    text-align:center;\n                }\n                \n                @media (min-width:769px){\n                    .election{\n                      font-size : 40px;\n                    }\n                  }\n            "),e.appendChild(n),e.appendChild(t)}}customElements.define("text-comp",e)}(),function(e){class n extends HTMLElement{constructor(){super(),this.syncState()}syncState(){this.render()}render(){const n=this.attachShadow({mode:"open"}),t=document.createElement("div"),i=document.createElement("style"),a=document.createElement("button");a.setAttribute("class","button"),i.innerHTML="\n\n          .button{\n            margin-top:20px;\n            min-width:300px;\n            height:87px;\n            background-color:#141414;\n            border-radius: 10px;\n            border: 10px groove #4C4C4C;\n            font-size:50px;\n            color:#Fafafa;\n            font-family: 'Odibee Sans', cursive;\n            z-index:20;\n          }\n          \n      ","invert"==this.getAttribute("color")&&(i.innerHTML+="\n        .button{\n          background-color:#Fafafa;\n          border: 10px groove #4C4C4C;\n          color:#141414;\n        }\n        "),this.textContent=this.getAttribute("text"),a.addEventListener("click",(()=>{"Empezar"==this.textContent&&e.goTo("/instruction"),"Jugar"==this.textContent&&e.goTo("/election"),"Volver a jugar"==this.textContent&&e.goTo("/election"),"Reiniciar puntaje"==this.textContent&&(o.setState({...o.getState(),history:{computerWin:0,myWin:0}}),localStorage.removeItem("state"),e.goTo("/"))})),a.textContent=this.textContent,n.appendChild(t),n.appendChild(i),t.appendChild(a)}}customElements.define("button-comp",n)}({goTo:n}),t(location.pathname.replace("/desafio-m5/","/"))}!function(){const e=JSON.parse(localStorage.getItem("state"))||o.getState();o.setState({...e});u(document.querySelector(".root"))}();
//# sourceMappingURL=index.4cfbdfdb.js.map
