import React from 'react';
// style
import Styles from '../styles/Homepage.module.css'

// icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpLong } from '@fortawesome/free-solid-svg-icons';
// hooks
import { useState } from 'react';
// components 
import Bestcoin from './Bestcoin';
// photoes
import UserPhoto from "../images/UserPhoto.png"
// bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';



const Homepage = ({apiData}) => {

    const data = []
    apiData.forEach(element => {
        data.push({"valueChange" : element.market_cap_change_percentage_24h , "value" : element.current_price,"name" : element.symbol.toUpperCase() , "image" : element.image})
        
    });

    data.sort((a, b) => {
        if (a.value < b.value) {
          return -1;
        }
        if (a.value > b.value) {
          return 1;
        }
        return 0;
      });
      data.reverse()


      const bestCoin = data.slice(0,5)

      console.log(bestCoin)

    return (
        <div className={Styles.homeContainer}>

            <div className={Styles.header}>
                <div>
                    <p>Welcome</p>
                    <h4>Ali Saadat</h4>
                </div>
                <img src={UserPhoto} alt='profile'></img>
            </div>

            <div className={Styles.ourMoney}>
                <div className={Styles.partone}>
                    <p>Balance</p>
                    <h2><FontAwesomeIcon style={{color:"#0af731" , width:"1rem" , height:"1rem"}} icon={faUpLong} /> $ 27,934</h2>
                </div>

                <div >
        
                    <p>Monthly profit</p>
                    <h5>$563</h5>
                </div>

            </div>

                <h4>Top 5 best</h4>
            <div className={Styles.bestcoins}>
                
                    {bestCoin.map(coin => <Bestcoin key={coin} BestCoin={coin} ></Bestcoin>)}
                
            </div>
            <div className={Styles.worstcoins}>

            </div>



        </div>
    );
};

export default Homepage;