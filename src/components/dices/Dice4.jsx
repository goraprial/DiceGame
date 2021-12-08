import React from 'react'
import './DiceStyle.css'

export const Dice4 = ({hidden}) => {
    return (
        <div className={`${hidden && 'dices'}`}>
            <div className={`${hidden && 'dice4'}`}>
                <div>
                    <div className={`${hidden && 'diceDot4'}`}></div>
                    <div className={`${hidden && 'diceDot4'}`}></div>
                </div>
                <div>
                    <div className={`${hidden && 'diceDot4'}`}></div>
                    <div className={`${hidden && 'diceDot4'}`}></div>
                </div>
            </div>
        </div>
    )
}
