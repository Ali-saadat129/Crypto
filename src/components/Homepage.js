import React from 'react';
// style
import Styles from '../styles/Homepage.module.css'

// icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpLong } from '@fortawesome/free-solid-svg-icons';



import UserPhoto from "../images/UserPhoto.png"

const Homepage = () => {
    return (
        <div className={Styles.homeContainer}>

            <div className={Styles.header}>
                <div>
                    <p>Welcome</p>
                    <h4>Ali Saadat</h4>
                </div>
                <img src={UserPhoto}></img>
            </div>

            <div className={Styles.ourMoney}>
                <div className={Styles.partone}>
                    <p>Balance</p>
                    <h4><FontAwesomeIcon style={{color:"green"}} icon={faUpLong} /> $ 27,934</h4>
                </div>

                <div className={Styles.parttwe}>
        
                    <p>Monthly profit</p>
                    <h5>$563</h5>
                </div>

            </div>

            <div className={Styles.bestcoins}>

            </div>

            <div className={Styles.worstcoins}>

            </div>



        </div>
    );
};

export default Homepage;