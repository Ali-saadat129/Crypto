import React from 'react';

// styles
import Styles from "../styles/Bestcoin.module.css"



const Bestcoin = ({BestCoin}) => {

    console.log(BestCoin)


    return (
        <div className={Styles.bestContainer}>
            <div className={Styles.topper} >
                <img src={BestCoin.image}></img>
                <p>{BestCoin.name}</p>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Bestcoin;