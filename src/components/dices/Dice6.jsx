import React from 'react'
import './DiceStyle.css'

export const Dice6 = ({hidden}) => {
    return (
        <div className={`${hidden && 'dices'}`}>
            <div className={`${hidden && 'dice6'}`}>
                <div>
                    <div className={`${hidden && 'diceDot6'}`}></div>
                    <div className={`${hidden && 'diceDot6'}`}></div>
                    <div className={`${hidden && 'diceDot6'}`}></div>
                </div>
                <div>
                    <div className={`${hidden && 'diceDot6'}`}></div>
                    <div className={`${hidden && 'diceDot6'}`}></div>
                    <div className={`${hidden && 'diceDot6'}`}></div>
                </div>
            </div>
        </div>
    )
}
