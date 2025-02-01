const rps = (player, computer) => {
  if (player === computer) return "draw";
  if (player === GAME_OPTIONS.ROCK) {
    return computer === GAME_OPTIONS.PAPER ? "computer" : "player";
  }
  if (player === GAME_OPTIONS.PAPER) {
    return computer === GAME_OPTIONS.SCISSORS ? "computer" : "player";
  }

  return computer === GAME_OPTIONS.ROCK ? "computer" : "player";
};

const getComputerPlay = () => {
  const rpsOptions = [
    GAME_OPTIONS.ROCK,
    GAME_OPTIONS.PAPER,
    GAME_OPTIONS.SCISSORS
  ];
  const index = Math.floor(Math.random() * rpsOptions.length);

  return rpsOptions[index];
};

const updateScore = () => {
  playerScore.textContent = scores.player;
  computerScore.textContent = scores.computer;
};

const game = e => {
  const player = e.target.textContent;
  const computer = getComputerPlay();
  play.textContent = `${player} ✕ ${computer}`;

  const winner = rps(player, computer);
  if (winner === "draw") {
    result.textContent = "Empatou!";
  } else if (winner === "player") {
    result.textContent = "Jogador ganhou!";
    scores.player++;
  } else {
    result.textContent = "Jogador perdeu!";
    scores.computer++;
  }

  updateScore();
};

const play = document.getElementById("play");
const result = document.getElementById("result");

const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

const btns = document.querySelectorAll("button");

const GAME_OPTIONS = {
  ROCK: "👊",
  PAPER: "🖐️",
  SCISSORS: "✌️"
};
const scores = { player: 0, computer: 0 };

btns.forEach(btn => {
  btn.addEventListener("click", game);
});
