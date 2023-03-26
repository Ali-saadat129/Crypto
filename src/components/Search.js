import React from 'react';
// css
import Styles from "../styles/Search.module.css"

// Hooks
import { useState } from 'react';
import { useEffect } from 'react';
// bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// components
import Crypto from './Crypto'; 
import Footer from "./Footer"

const Search = ({cryptoData}) => {


    
    // input value
    const [ tempstate ,settemp ] = useState("")
    let Data = cryptoData
    
    const inputHandler = (event) => {
        settemp(event.target.value)
    }
    const newData = Data.filter(coin => coin.name.toLowerCase().includes(tempstate.toLowerCase()))
    function handleKeyPress(event) {
        if (event.key === 'Enter' & tempstate.length>0 ) {
            const newData = Data.filter(coin => coin.name.toLowerCase().includes(tempstate.toLowerCase()))
            
        }
    }
    // useEffect(() => {
    //     handleKeyPress()
    // })
    
    return (
        <div className={`container ${Styles.Container}`}>
            <div className={`input-group mb-3 ${Styles.Footersearch}`}>
                <div className={`${Styles.button}`}>
                    <input type='text' onKeyPress={handleKeyPress} value={tempstate} onChange={inputHandler} className={` form-control`}   placeholder="Search... " aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>
            </div>
            <h2 >
                Market
            </h2>
            <div className={Styles.coinchart}>
                {newData.map(coin => <Crypto key={coin.name}  data={coin}></Crypto>)}
            </div>

            <div className={Styles.footer}>

            <Footer />
            </div>
        </div>
    );
};

export default Search;