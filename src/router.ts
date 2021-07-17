import { initButtonComp } from "./components/button";
import { initHandsComp } from "./components/hands";
import { initTextComp } from "./components/text";
import { initPageElection } from "./pages/election";
import { initPageVersus } from "./pages/versus/index";
import { initPageInstruction } from "./pages/instruction/index";
import { initPageWelcome } from "./pages/welcome/index";

const routes = [
  {
    path: /\//,
    component: initPageWelcome,
  },
  {
    path: /\/instruction/,
    component: initPageInstruction,
  },
  {
    path: /\/election/,
    component: initPageElection,
  },
  {
    path: /\/versus/,
    component: initPageVersus,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path.replace("/desafio-m5/", ""));
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

  handleRoute(location.pathname.replace("/desafio-m5/", "/"));
}
