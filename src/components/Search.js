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
// import Crypto from './crypto';


const Search = ({cryptoData}) => {

    // input value
    const [ tempstate ,settemp ] = useState("")

    const inputHandler = (event) => {
        settemp(event.target.value)
    }
    const Data = cryptoData
    console.log(cryptoData)
    
    return (
        <div className={`container ${Styles.Container}`}>
            <h2>
                Market
            </h2>
            <div>

            </div>



            <div className={`input-group mb-3 ${Styles.Footersearch}`}>
                <div className="input-group-prepend">
                    <button className={`btn btn-primary`}><FontAwesomeIcon className={`input-group-text bg-primary ${Styles.searchbutton}`} icon={faSearch} /></button>
                </div>
                <input type='text' value={tempstate} onChange={inputHandler} className={` form-control`}   placeholder="Search..." aria-label="Username" aria-describedby="basic-addon1"></input>
            </div>
        </div>
    );
};

export default Search;