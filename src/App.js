
// components
import Main from "./Main";
import Search from "./components/Search";
import Settingpage from "./components/Settingpage";
// styles
import Styles from "./styles/App.module.css"
// Api
import { getData } from './Api/Api';
// browser router
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

// Hooks 
import { useEffect } from 'react';
import { useState } from 'react';


function App() {

// resive Api data
  const [cryptoData , setCryptoData] = useState([])

  useEffect(() => {
      const dataResive = async  () => {
          const data = await getData()
          setCryptoData(data)
      }
      dataResive()
  },[])



  return (
      <div className={Styles.App}>
        <Routes>
          <Route path="/" element={<Main  cryptoData={cryptoData}   />} />
          <Route path="/searchpage" element={<Search  cryptoData={cryptoData}   />} />
          <Route path="/Settingpage" element={<Settingpage     />} />

        </Routes>
      </div>

  );
}

export default App;
