import React from 'react'
import './DiceStyle.css'

export const Dice3 = ({hidden}) => {
    return (
        <div className={`${hidden && 'dices'}`}>
            <div className={`${hidden && 'dice3'}`}>
                <div className={`${hidden && 'diceDot3-1'}`}></div>
                <div className={`${hidden && 'diceDot3-2'}`}></div>
                <div className={`${hidden && 'diceDot3-3'}`}></div>
            </div>
        </div>
    )
}
