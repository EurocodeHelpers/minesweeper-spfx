import * as React from 'react';import styles from '../Minesweeper.module.scss';
import MinesweeperSquareModel from '../../models/MinesweeperSquareModel';
import NumberSquare from './NumberSquare';
import BombSquare from './BombSquare';
import FlagSquare from './FlagSquare';


import UnclickedSquare from './UnclickedSquare';


import {SquareType} from '../../constants';
import BombSquareGameOver from './BombSquareGameOver';

export interface IMinesweeperSquareProps {
    square: MinesweeperSquareModel;
    onLeftClick: any;
    onRightClick: any;
    onMouseDownEmoticon: any;
}

const MinesweeperSquare = (props: IMinesweeperSquareProps) => {

    let {square, onLeftClick, onRightClick} = props;
``
    const onMouseUp = (e) => {
        (e.button == 0) ? onLeftClick(square._row, square._col) : onRightClick(square._row, square._col)
    }

    const onMouseDown = () => {
        props.onMouseDownEmoticon();
    }

    return (
        <div 
            onMouseDown={() => onMouseDown()} 
            onMouseUp={(e) => onMouseUp(e)}
            onContextMenu={(e)=> e.preventDefault()} 
            style={{display: "inline", margin: "0px"}}>
           
           {(() => {

                //If square has not been revealed yet...
                if (square._isRevealed == false) {

                    return (square._isFlag == true) ? <FlagSquare /> : <UnclickedSquare />
                }
                else {

                    switch (square._value) {
                        case SquareType.Zero:            
                            return (
                                    <NumberSquare color="#ffffff" number="&nbsp;" />
                            );
                        case SquareType.One:  
                            return (
                                    <NumberSquare color="#0000ff" number="1" />
                            );
                        case SquareType.Two:  
                            return (
                                    <NumberSquare color="#017E00" number="2" />
                            );
                        case SquareType.Three:  
                            return (
                                    <NumberSquare color="#FE0001" number="3" />
                            );
                        case SquareType.Four: 
                            return (
                                    <NumberSquare color="#000180" number="4" />
                            );
                            case SquareType.Five:  
                            return (
                                    <NumberSquare color="#810201" number="5" />
                            );
                        case SquareType.Six:  
                            return (
                                    <NumberSquare color="#008080" number="6" />
                            );
                        case SquareType.Seven:  
                            return (
                                    <NumberSquare color="#000000" number="7" />
                            );
                        case SquareType.Eight:  
                            return (
                                    <NumberSquare color="#808080" number="8" />
                            );                
                        case SquareType.Bomb:
                            return (
                                    <BombSquare />
                            );
                        case SquareType.BombClicked:
                            return (
                                    <BombSquareGameOver />
                            );
                    }
                }
                   
            }
            )()}
        </div>     

    )

   
}

export default MinesweeperSquare;