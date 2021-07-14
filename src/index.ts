import { initRouter } from "./router";
import { state } from "./state";

(function () {
  const lastState =
  JSON.parse(localStorage.getItem("state")) || state.getState();
  state.setState({
    ...lastState
  });
  const root = document.querySelector(".root");
  initRouter(root);
})();
