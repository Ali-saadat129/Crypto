import React from 'react';

// bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
// css
import Styles from "../styles/Crypto.module.css"
const Crypto = ({data}) => {


    return (
        <div className={`container ${Styles.coincontainer}`}>
            <div className={`row ${Styles.row}`}>
                <img src={data.image } alt='picname' className={`col-2`}></img>
                <div className={`col-10 d-flex ${Styles.infocoin}`}>
                    <h5>{data.symbol}</h5>
                    <p className={Styles.name}>{data.name}</p>
                
                    <p> {data.current_price}$ </p>
                    <p className={`${data.market_cap_change_percentage_24h > 0 ? Styles.green : Styles.red} change`}> {data.market_cap_change_percentage_24h}% </p>

                </div>
            </div>
        </div>
    );
};

export default Crypto;