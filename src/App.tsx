import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeadProvider } from "react-head";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import styled from "styled-components";
import SponsorSection from "./components/SponsorSection/SponsorSection";
import Contact from "./pages/Contact/Contact";
import Tuliszkow from "./components/TuliszkowSection/Tuliszkow";
import TuliszkowSave from "./components/TuliszkowSection/TuliszkowSave";

const AppWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 40px;
  padding: 20px 0px 20px 60px;
  box-sizing: border-box;
  /* background-color: #f8f9fa; */
  /* background: linear-gradient(135deg, #001845 0%, #004aad 40%, #00b4d8 100%);
  background-attachment: fixed; */
  min-height: 80vh;
`;

const App = () => {
  return (
    <HeadProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <AppWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/tuliszkow" element={<Tuliszkow />} />
            <Route path="/tuliszkow/:action" element={<TuliszkowSave />} />
            <Route path="/rychwal/" element={<Tuliszkow />} />
            <Route path="/rychwal/:action" element={<TuliszkowSave />} />
            <Route path="/malanow/" element={<Tuliszkow />} />
            <Route path="/malanow/:action" element={<TuliszkowSave />} />
            <Route path="/przykona/" element={<Tuliszkow />} />
            <Route path="/przykona/:action" element={<TuliszkowSave />} />
          </Routes>
          <SponsorSection />
        </AppWrapper>
      </BrowserRouter>
    </HeadProvider>
  );
};

export default App;
