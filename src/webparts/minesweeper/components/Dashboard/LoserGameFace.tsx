import * as React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faSquare, faCircle, faDizzy } from '@fortawesome/free-solid-svg-icons';
import styles from '../Minesweeper.module.scss';

const LoseGameFace = () => {

    return (
        <span className="fa-layers fa-fw fa-3x">
            <FontAwesomeIcon 
                icon={faSquare} 
                color="#CCC"
                onContextMenu={(e)=> e.preventDefault()}
            />
            <FontAwesomeIcon icon={faCircle} transform="shrink-9" color="#000" />
            <FontAwesomeIcon icon={faDizzy} transform="shrink-6" color="#f1c40f" />
        </span>
    )
}

export default LoseGameFace;