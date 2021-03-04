import React, { useEffect, useState } from "react";
import bomb from '../../assets/bomb.svg'
import blackBomb from '../../assets/black_bomb.svg'
import './control-panel.component.css'
import {useGlobalContext} from "../../context";
import {StatesOfGame} from '../../status'

const ControlPanel = () => {
    const { flagCounter,  gameStatus, restart } = useGlobalContext()
    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval = null;
        if (gameStatus === StatesOfGame.FIRST_CLICK) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1000)
            }, 1000)
        } else if (gameStatus === StatesOfGame.NOT_STARTED) {
            setTime(0)
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [gameStatus])

    const updateEmoji = () => {
        let icon;
        if (gameStatus === StatesOfGame.GAME_OVER) {
            icon = '😞'
        } else if (gameStatus === StatesOfGame.GAME_WON) {
            icon = '🥳'
        } else {
            icon = '🙂'
        }
        return icon;
    }

    return (
        <>
            <header>
                <h1 className="title">Minesweeper</h1>
                <img src={bomb}
                     className={'bomb' + (gameStatus === StatesOfGame.GAME_OVER || gameStatus === StatesOfGame.GAME_WON ? ' not-animated' : '')} alt="logo" />
            </header>
            <div className="status-bar">
                <div className="flag-counter">
                    <img src={blackBomb} className="black-bomb" alt="black bomb"/>
                    <span className="counter">{flagCounter}</span>
                </div>
                <p title="Restart" className="emoji" onClick={restart}>{updateEmoji()}</p>
                <div className="timer">
                    {('0' + Math.floor((time / 60000) % 60)).slice(-2) + ':' + ('0' + Math.floor((time / 1000) % 60)).slice(-2)}
                </div>
            </div>
        </>
    )
}

export default ControlPanel
