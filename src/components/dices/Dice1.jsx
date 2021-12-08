import React from 'react'
import './DiceStyle.css'

export const Dice1 = ({hidden}) => {
    return (
        <div className={`${hidden && 'dices'}`}>
            <div className={`${hidden && 'dice1'}`}>
                <div className={`${hidden && 'diceDot1'}`}></div>
            </div>
        </div>
    )
}
