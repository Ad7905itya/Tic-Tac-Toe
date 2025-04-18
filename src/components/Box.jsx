import React from 'react'

const Box = ({id,handleClick}) => {
  return (
    <div id="box" onClick={handleClick} data-id={id} className="flex justify-center items-center bg-yellow-50 rounded-3xl w-32 h-32 font-bold text-3xl cursor-pointer select-none"></div>
  )
}

export default Box