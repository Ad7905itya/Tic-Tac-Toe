const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const onCheckWin = (setWinningInput) => {
  const boxes = document.querySelectorAll("#box");
  for (let i = 0; i < winningPatterns.length; i++) {
    const [a, b, c] = winningPatterns[i];
    if (
      boxes[a].innerHTML === boxes[b].innerHTML &&
      boxes[a].innerHTML === boxes[c].innerHTML &&
      boxes[a].innerHTML !== ""
    ) {
      setWinningInput(`Player ${boxes[a].innerHTML} won!`);
      return true;
    }
  }
};
