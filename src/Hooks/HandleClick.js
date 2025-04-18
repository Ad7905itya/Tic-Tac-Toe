import { checkDraw } from "../utils/CheckDraw";
import { onCheckWin } from "../utils/CheckWin";

export const useHandleClick = (
  e,
  { setBoxInput, BoxInput, setWinningInput }
) => {
  const id = e.target.dataset.id;
  let boxes = document.querySelectorAll("#box");
  if (boxes[id].innerHTML === "") {
    if (BoxInput === "X") {
      boxes[id].innerHTML = "X";
      setBoxInput("0");
      boxes[id].style.color = "red";
    } else {
      boxes[id].innerHTML = "0";
      setBoxInput("X");
      boxes[id].style.color = "blue";
    }
    checkDraw(setWinningInput);
    onCheckWin(setWinningInput);
    if (onCheckWin(setWinningInput)) {
      boxes.forEach((box) => {
        box.style.pointerEvents = "none";
      });
    }
  }
};
