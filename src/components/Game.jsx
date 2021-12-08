import React, {useState, useEffect} from 'react'
import { AllDices } from './dices/AllDices';
import './GameStyles.css'

export const Game = () => {
    const [dice1, setDice1] = useState(0);
    const [dice2, setDice2] = useState(0);
    const [result, setResult] = useState(-1);
    const [score, setScore] = useState(0);
    const [message, setMessage] = useState('');
    const [diceMessage, setDiceMessage] = useState('Lanza un dado')
    
    const handleCounter = () =>{
        setDice1(Math.floor(Math.random()*6)+1);
        setDice2(Math.floor(Math.random()*6)+1);
    }
    const handleReset = () =>{
        setResult(Math.floor(Math.random()*12)+1);
        setScore(0);
        document.title = 'Score: ' + score;
    }
    const handleScore=()=>{
        setMessage('¡Bien hecho!');
        setScore(score+1);
    }
    
    useEffect(()=>{
        setResult(Math.floor(Math.random()*12)+1);
        setMessage('Intenta conseguir el mismo numero que el del Goal')
        document.title = 'Juego de dados';
    },[])
    
    useEffect(() => {
        dice1 != 0 && setDiceMessage(`Dado 1: ${dice1} | Dado 2: ${dice2}`);
    })
    useEffect(()=>{
        if((dice1 + dice2)==result){
            document.title = 'Score: ' + score;
            handleScore();

        }else if(dice1!=0){
            setMessage('¡Intenta de nuevo!');
            if(result==1){
                setResult(Math.floor(Math.random()*12)+1);
            }
        }
    },[dice1, dice2]);

    return (
        <div className='game'>
            <div className='messages'>
                <h1>{`Goal: ${result}`}</h1>
                <h1>{message}</h1>
            </div>
            <h2>{diceMessage}</h2>
            <AllDices dice1={dice1} dice2={dice2}/>
            <div className='bottomPanel'>
                <h1>{`Resultado: ${dice1 + dice2} Puntuación: ${score}`}</h1>
                <div className='buttons'>
                    <button onClick={()=>handleCounter()}>Lanzar los dados</button>
                    <button onClick={()=>{handleReset()}}>Reset</button>
                </div>

            </div>
        </div>
    )
}
