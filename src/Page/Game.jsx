import React, { useState } from 'react'
import { useReset } from '../Hooks/Reset';
import Box from '../Components/Box';
import { useHandleClick } from '../Hooks/HandleClick';

const Game = () => {
    const [BoxInput, setBoxInput] = useState('X');
    const [WinningInput, setWinningInput] = useState('');
    const reset = () => useReset({ setBoxInput, setWinningInput });
    const onHandleClick = (e) => useHandleClick(e, { setBoxInput, BoxInput, setWinningInput });

    return (
        <main className="flex flex-col justify-center items-center gap-5 bg-blue-200 h-screen">
            <h1 className="mb-10 font-bold text-4xl uppercase">Tic Tac Toe </h1>
            <div className="gap-2 grid grid-cols-3">
                {Array.from({ length: 9 }).map((_, index) => (
                    <Box key={index} handleClick={onHandleClick} id={index} />
                ))}
            </div>
            <p className='text-2xl'>{WinningInput}</p>
            <button onClick={reset} className='bg-blue-400 hover:bg-blue-700 mt-5 px-4 py-2 rounded-3xl text-white cursor-pointer'>{WinningInput ? 'Play Again' : 'Reset'}</button>
        </main>
    )
}

export default Game