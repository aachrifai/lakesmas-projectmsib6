import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import NavbarComponents from './components/NavbarComponents';
// import FooterComponents from './components/FooterComponents';

import HomePage from './pages/HomePage';
import ArtikelPage from './pages/ArtikelPage';
import ProfilePage from './pages/ProfilePage';
import PredictionPage from './pages/PredictionPage';
import DiabetesPage from './pages/FormDiabetes';
import StuntingPage from './pages/FormStunting';
import LoginPage from './pages/LoginPage';
import DaftarPage from './pages/DaftarPage';


function App() {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "378af8e7-00bc-464d-982e-fe1035d9b98e", // The ID of this integration.
      region: "us-south", // The region your integration is hosted in.
      serviceInstanceID: "a1daffbf-2f08-4af3-971b-710d15736295", // The ID of your service instance.
      onLoad: async (instance) => { await instance.render(); }
    };

    setTimeout(() => {
      const t = document.createElement('script');
      t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
      document.head.appendChild(t);
    }, 0);
  }, []);

  return (
    <div>
      <NavbarComponents />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/home" Component={HomePage} />
        <Route path="/Artikel" Component={ArtikelPage} />
        <Route path="/Profile" Component={ProfilePage} />
        <Route path="/Prediction" Component={PredictionPage} />
        <Route path="/Diabetes" Component={DiabetesPage} />
        <Route path="/Stunting" Component={StuntingPage} />
        <Route path="/Login" Component={LoginPage} />
        <Route path="/Daftar" Component={DaftarPage} />
      </Routes>
      {/* <FooterComponents/> */}
    </div>
  );
}

export default App;
