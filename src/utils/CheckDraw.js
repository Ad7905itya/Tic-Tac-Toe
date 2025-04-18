export const checkDraw = (setWinningInput ) => {
  const boxes = document.querySelectorAll("#box");
  if (
    boxes[0].innerHTML !== "" &&
    boxes[1].innerHTML !== "" &&
    boxes[2].innerHTML !== "" &&
    boxes[3].innerHTML !== "" &&
    boxes[4].innerHTML !== "" &&
    boxes[5].innerHTML !== "" &&
    boxes[6].innerHTML !== "" &&
    boxes[7].innerHTML !== "" &&
    boxes[8].innerHTML !== ""
  ) {
    setWinningInput("Draw");
  }
};
