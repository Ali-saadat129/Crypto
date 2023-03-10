import React from 'react';

// Api
import { getData } from './Api/Api';
// Hooks 
import { useEffect } from 'react';
import { useState } from 'react';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

// components 
import Footer from './components/Footer';
import Homepage from './components/Homepage';
// css
import Styles from "./styles/Main.module.css"

const Main = () => {

    const [cryptoData , setCryptoData] = useState([])

    useEffect(() => {
        const dataResive = async  () => {
            const data = await getData()
            setCryptoData(data)
        }
        dataResive()
    },[])

    

    return (
        <div className={Styles.mainContainer} >
            <div className={Styles.Homepage}>
                <Homepage />
            </div>
            <div className={Styles.footer}>
                <Footer />
            </div>
        </div>
    );
};

export default Main;