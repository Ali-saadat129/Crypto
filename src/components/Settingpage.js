import React from 'react';

// router and hooks
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
// css
import Styles from "../styles/Settingpage.module.css"
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareLeft, faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
// user image
import userpic from "../images/usersett.png"
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


const Settingpage = () => {

    // accordion js code
    useEffect(() => {

        
        const accordionHeaders = document.querySelectorAll(".accordion-header");
        // show accordion context 
        accordionHeaders.forEach((header) => {
            header.addEventListener("click", () => {
        
            const accordionContent = header.nextElementSibling;

            if (accordionContent.style.display === "block") {
                accordionContent.style.display = "none";
            } else {
                accordionContent.style.display = "block";
            }
            });
        });
    })


    return (
        <div className={`container ${Styles.containerSetting}`}>
            <div className={Styles.headersett}>
                <Link to='/'><FontAwesomeIcon icon={faCaretSquareLeft} /></Link>
                <h3>Setting</h3>
            </div>
            <div className={`row ${Styles.userinfo}`}>
                <img  alt='usephoto' src={userpic} className={`col-3`}></img>
                <div className={`col-9  `}>
                    <h5>Ali Saadat</h5>
                    <p>alisaadat129@gmail.com</p>
                </div>
            </div>
            <div className={Styles.accordion}>
                <div className={`${Styles.accordionItem}`}>
                    <div className={`accordion-header ${Styles.accordionHeader}`}>
                        <div className={``}><FontAwesomeIcon icon={faBell} /><span>notification</span></div>
                        <FontAwesomeIcon icon={faCircleDown} />
                    </div>
                    <div className={`${Styles.accordionContext}`}>
                        Sunt fugiat dolore nostrud deserunt aliqua consectetur.
                        <button className={`btn btn-primary`}>notification</button>
                    </div>
                </div>

                <div className={`${Styles.accordionItem}`}>
                    <div className={`accordion-header ${Styles.accordionHeader}`}>
                    <div className={``}><FontAwesomeIcon icon={faUser} /><span>privacy</span></div>
                        <FontAwesomeIcon icon={faCircleDown} />
                    </div>
                    <div className={`${Styles.accordionContext}`}>
                    Sunt fugiat dolore nostrud deserunt aliqua consectetur.
                        <button className={`btn btn-primary`}>privacy</button>
                    </div>
                </div>

                <div className={`${Styles.accordionItem}`}>
                    <div className={`accordion-header ${Styles.accordionHeader}`}>
                    <div className={``}><FontAwesomeIcon icon={faShieldHalved} /><span>security</span></div>
                        <FontAwesomeIcon icon={faCircleDown} />
                    </div>
                    <div className={`${Styles.accordionContext}`}>
                    Sunt fugiat dolore nostrud deserunt aliqua consectetur.
                        <button className={`btn btn-primary`}>security</button>
                    </div>
                </div>

                <div className={`${Styles.accordionItem}`}>
                    <div className={`accordion-header ${Styles.accordionHeader}`}>
                    <div className={``}><FontAwesomeIcon icon={faMessage} /><span>Ads</span></div>
                        <FontAwesomeIcon icon={faCircleDown} />
                    </div>
                    <div className={`${Styles.accordionContext}`}>
                    Sunt fugiat dolore nostrud deserunt aliqua consectetur.
                        <button className={`btn btn-primary`}>Ads</button>
                    </div>
                </div>

                <div className={`${Styles.accordionItem}`}>
                    <div className={`accordion-header ${Styles.accordionHeader}`}>
                    <div className={``}><FontAwesomeIcon icon={faQuestion} /><span>about us</span></div>
                        <FontAwesomeIcon icon={faCircleDown} />
                    </div>
                    <div className={`${Styles.accordionContext} ${Styles.aboutus}`}>
                        <Link to="#"><FontAwesomeIcon icon={faInstagram} /></Link>
                        <Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link>
                        <Link to="#"><FontAwesomeIcon icon={faGithub} /></Link>

                    </div>
                </div>

                <div className={`${Styles.accordionItem}`}>
                    <div className={`accordion-header ${Styles.accordionHeader}`}>
                    <div className={``}><FontAwesomeIcon icon={faHandshake} /><span>help</span></div>
                        <FontAwesomeIcon icon={faCircleDown} />
                    </div>
                    <div className={`${Styles.accordionContext}`}>
                    Sunt fugiat dolore nostrud deserunt aliqua consectetur.
                        <button className={`btn btn-primary`}>Help</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settingpage;