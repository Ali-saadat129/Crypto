import React from 'react';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

// css
import Styles from "../styles/Footer.module.css"

const Footer = () => {
    return (
        <div className={Styles.footerContainer}>
            <ul>
            <li><FontAwesomeIcon icon={faHouse} /></li>
            <li><FontAwesomeIcon icon={faSearch} /></li>
            <li><FontAwesomeIcon icon={faChartLine} /></li>
            <li><FontAwesomeIcon icon={faUser} /></li>
            </ul>
        </div>
    );
};

export default Footer;