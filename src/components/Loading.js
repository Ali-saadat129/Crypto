import React from 'react';
// loading gif
import giphy from "../images/giphy.gif"


const Loading = () => {
    return (
        <div style={{display:"flex",alignItems:"center",justifyContent:'center' , flexDirection:'column' ,padding:'2rem' }}>
            <img alt='loadinggif' style={{width:"50%",height:"50%" , marginBottom:'2rem'}} src={giphy}></img>
            <h2>loading... </h2>
            <p style={{color:'white'}}>if loading time more than few seconds please turn on vpn because we are living in Iran</p>
        </div>
    );
};

export default Loading;