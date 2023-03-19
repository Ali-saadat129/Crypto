import React from 'react';

import Styles from "../styles/Worstcoins.module.css"



const Worstcoins = ({worstcoins}) => {
    return (
        <div className={Styles.worstContainer}>
            <div className={Styles.topper} >
                <img src={worstcoins.image}></img>
                <p>{worstcoins.name.slice(0,4)}</p>
            </div>
            <div className={Styles.downpart}>
                <p > Value : {worstcoins.value}$</p>
                <span>change in 24h:</span>
                <p className={`${worstcoins.valueChange < 0 ? Styles.red : Styles.green }`}> {worstcoins.valueChange}</p>
            </div>
        </div>
    );
};

export default Worstcoins;