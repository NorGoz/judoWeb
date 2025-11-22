import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HeadProvider } from "react-head";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import styled from "styled-components";
import SponsorSection from "./components/SponsorSection/SponsorSection";
import Contact from "./pages/Contact/Contact";

import { CalendarRychwal } from "./components/CalendarSection/CalendarRychwal/CalendarRychwal";
import { CalendarTuliszkow } from "./components/CalendarSection/CalendarTuliszkow/CalendarTuliszkow";
import { CalendarStawiszyn } from "./components/CalendarSection/CalendarStawiszyn/CalendarStawiszyn";
import { CalendarWladyslawow } from "./components/CalendarSection/CalendarWladyslawow/CalendarWladyslawow";
import { CalendarGrodziec } from "./components/CalendarSection/CalendarGrodziec/CalendarGrodziec";
import { CalendarMalanow } from "./components/CalendarSection/CalendarMalanow/CalendarMalanow";
import DocumentsSection from "./pages/Document/Document";
import { BREAKPOINTS } from "./styles/breakpoints";

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
  /* TABLET */
  @media (max-width: ${BREAKPOINTS.tablet}) {
    flex-direction: column;
    padding: 20px;
    gap: 32px;
  }

  /* MOBILE */
  @media (max-width: ${BREAKPOINTS.mobile}) {
    padding: 16px;
    gap: 24px;
  }
  @media (max-width: 375px) {
    padding: 5px;
  }
`;

const App = () => {
  return (
    <HeadProvider>
      <BrowserRouter basename="/judoWeb">
        <GlobalStyle />
        <Header />
        <AppWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/tuliszkow" element={<CalendarTuliszkow />} />
            <Route path="/stawiszyn" element={<CalendarStawiszyn />} />
            <Route path="/grodziec" element={<CalendarGrodziec />} />
            <Route path="/wladyslawow" element={<CalendarWladyslawow />} />
            <Route path="/rychwal/" element={<CalendarRychwal />} />

            <Route path="/malanow/" element={<CalendarMalanow />} />
            <Route path="/document" element={<DocumentsSection />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <SponsorSection />
        </AppWrapper>
      </BrowserRouter>
    </HeadProvider>
  );
};

export default App;
