type Jugada = "piedra" | "papel" | "tijera";

export const state = {
  data: {
    currentGame: {
      computerPlay: "",
      myPlay: "",
    },
    history: {
      computerWin: 0,
      myWin: 0,
    },
  },
  getState() {
    return this.data;
  },
  setState(newState) {
    this.data = newState;
  },
  setMove(move: Jugada) {
    const options = ["papel", "piedra", "tijera"];
    const { currentGame } = this.getState();
    currentGame.myPlay = move;
    currentGame.computerPlay = options[Math.floor(Math.random() * 2)];
    this.historyState();
  },
  whoWins() {
    const { currentGame } = this.getState();
    const myPlay = currentGame.myPlay;
    const computerPlay = currentGame.computerPlay;
    const result =
      (myPlay == "papel" && computerPlay == "piedra") ||
      (myPlay == "tijera" && computerPlay == "papel") ||
      (myPlay == "piedra" && computerPlay == "tijera")
        ? "win"
        : myPlay == computerPlay
        ? "tie"
        : "lose";

    return result;
  },

  historyState() {
    const result = this.whoWins();
    const currentState = this.getState();
    const myScore = currentState.history.myWin;
    const computerScore = currentState.history.computerWin;

    if (result == "win") {
      this.setState({
        ...currentState,
        history: {
          myWin: myScore + 1,
          computerWin: computerScore,
        },
      });
    }
    if (result == "lose") {
      this.setState({
        ...currentState,
        history: {
          myWin: myScore,
          computerWin: computerScore + 1,
        },
      });
    }
    localStorage.setItem("state", JSON.stringify(state.getState()));
  },
};
