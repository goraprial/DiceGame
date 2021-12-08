import React from 'react'
import './DiceStyle.css'

export const Dice2 = ({hidden}) => {
    return (
        <div className={`${hidden && 'dices'}`}>
            <div className={`${hidden && 'dice2'}`}>
                <div className={`${hidden && 'diceDot2'}`}></div>
                <div className={`${hidden && 'diceDot2'}`}></div>
            </div>
        </div>
    )
}
