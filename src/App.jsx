import { BrowserRouter, Route, Routes } from 'react-router-dom';

import React from 'react';
import MainPage from 'view/main/MainPage';
import OAuth2RedirectHandler from 'view/oAuth2/OAuth2RedirectHandler';
import SignInPage from 'view/signIn/SignInPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="oauth2/redirect" element={<OAuth2RedirectHandler />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
