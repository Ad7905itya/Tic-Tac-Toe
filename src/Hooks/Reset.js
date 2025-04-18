export const useReset = ({setBoxInput, setWinningInput}) => {
    const boxes = document.querySelectorAll('#box')
    boxes.forEach(box => {
      box.innerHTML = ''
      setBoxInput('X')
      box.style.pointerEvents = 'auto'
    })
    setWinningInput('')
}