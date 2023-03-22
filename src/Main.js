import React from 'react';



// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

// components 
import Footer from './components/Footer';
import Homepage from './components/Homepage';
// css
import Styles from "./styles/Main.module.css"

const Main = ({cryptoData}) => {


    

    return (
        <div className={Styles.mainContainer} >
            <div className={Styles.Homepage}>
                <Homepage apiData={cryptoData} />
            </div>
            <div className={Styles.footer}>
                <Footer />
            </div>
        </div>
    );
};

export default Main;