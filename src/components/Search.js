import React from 'react';
// css
import Styles from "../styles/Search.module.css"
// Hooks
import { useState } from 'react';
// bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// components
import Crypto from './Crypto'; 


const Search = ({cryptoData}) => {

    // input value
    const [ tempstate ,settemp ] = useState("")

    const inputHandler = (event) => {
        settemp(event.target.value)
    }
    const Data = cryptoData
    
    function handleKeyPress(event) {
        if (event.key === 'Enter') {
          console.log('Enter key pressed');
        }
      }
    
    return (
        <div className={`container ${Styles.Container}`}>
            <div className={`input-group mb-3 ${Styles.Footersearch}`}>
                <div className={`${Styles.button}`}>
                    <input type='text' onKeyPress={handleKeyPress} value={tempstate} onChange={inputHandler} className={` form-control`}   placeholder="Press enter " aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>
            </div>
            <h2>
                Market
            </h2>
            <div>
                {Data.map(coin => <Crypto data={coin}></Crypto>)}
            </div>



        </div>
    );
};

export default Search;