import React, {useEffect, useState} from 'react'
import { Dice1 } from './Dice1';
import { Dice2 } from './Dice2';
import { Dice3 } from './Dice3';
import { Dice4 } from './Dice4';
import { Dice5 } from './Dice5';
import { Dice6 } from './Dice6';


export const AllDices = ({dice1,dice2}) => {
    
    return (
        <div className='dicesRow'>
            <Dice1 hidden={dice1==1}/>
            <Dice2 hidden={dice1==2}/>
            <Dice3 hidden={dice1==3}/>
            <Dice4 hidden={dice1==4}/>
            <Dice5 hidden={dice1==5}/>
            <Dice6 hidden={dice1==6}/>

            <Dice1 hidden={dice2==1}/>
            <Dice2 hidden={dice2==2}/>
            <Dice3 hidden={dice2==3}/>
            <Dice4 hidden={dice2==4}/>
            <Dice5 hidden={dice2==5}/>
            <Dice6 hidden={dice2==6}/>
        </div>
    )
}
