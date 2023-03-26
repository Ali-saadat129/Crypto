import React from 'react';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';

// link 
import { Link } from 'react-router-dom';
// css
import Styles from "../styles/Footer.module.css"

const Footer = () => {
    return (
        <div className={Styles.footerContainer}>
            <ul>
                <Link to='/'><FontAwesomeIcon icon={faHouse} /></Link>
                <Link to="/searchpage"><FontAwesomeIcon icon={faSearch} /></Link>
                <Link to="/Settingpage"><FontAwesomeIcon icon={faGear} /></Link>
            </ul>
        </div>
    );
};

export default Footer;