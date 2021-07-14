import { initButtonComp } from "./components/button";
import { initHandsComp } from "./components/hands";
import { initTextComp } from "./components/text";
import { initPageElection } from "./pages/election";
import { initPageVersus } from "./pages/versus/index";
import { initPageInstruction } from "./pages/instruction/index";
import { initPageWelcome } from "./pages/welcome/index";

const routes = [
  {
    path: /\/desafio-m5\/welcome/,
    component: initPageWelcome,
  },
  {
    path: /\/desafio-m5\/instruction/,
    component: initPageInstruction,
  },
  {
    path: /\/desafio-m5\/election/,
    component: initPageElection,
  },
  {
    path: /\/desafio-m5\/versus/,
    component: initPageVersus,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  initHandsComp({ goTo: goTo });
  initTextComp();
  initButtonComp({ goTo: goTo });

  function handleRoute(route) {
    for (const r of routes) {
      if (r.path.test(route)) {
        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.innerHTML = r.component({ goTo: goTo });
      }
    }
  }

  if (location.pathname == "/desafio-m5/") {
    handleRoute("/desafio-m5/welcome");
  }
}
