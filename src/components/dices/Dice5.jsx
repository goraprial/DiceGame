import React from 'react'
import './DiceStyle.css'

export const Dice5 = ({hidden}) => {
    return (
        <div className={`${hidden && 'dices'}`}>
            <div className={`${hidden && 'dice5'}`}>
                <div>
                    <div className={`${hidden && 'diceDot5'}`}></div>
                    <div className={`${hidden && 'diceDot5'}`}></div>
                </div>
                <div className={`${hidden && 'dice5Center'}`}>
                    <div className={`${hidden && 'diceDot5'}`}></div>
                </div>
                <div>
                    <div className={`${hidden && 'diceDot5'}`}></div>
                    <div className={`${hidden && 'diceDot5'}`}></div>
                </div>
            </div>
        </div>
    )
}
