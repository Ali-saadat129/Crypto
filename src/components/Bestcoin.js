import React from 'react';

// styles
import Styles from "../styles/Bestcoin.module.css"
// icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpLong } from '@fortawesome/free-solid-svg-icons';


const Bestcoin = ({BestCoin}) => {

    console.log(BestCoin)


    return (
        <div className={Styles.bestContainer}>
            <div className={Styles.topper} >
                <img src={BestCoin.image}></img>
                <p>{BestCoin.name}</p>
            </div>
            <div className={Styles.downpart}>
                <p> Value : {BestCoin.value}$</p>
            </div>
        </div>
    );
};

export default Bestcoin;