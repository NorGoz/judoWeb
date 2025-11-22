import React from "react";
import Gallery from "../../components/GallerySection/Gallery";
import styled from "styled-components";
import NewsSection from "../News/NewsSection";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 60px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: ${BREAKPOINTS.tablet}) {
    gap: 40px;
    padding: 16px;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    gap: 32px;
    padding: 12px;
  }
`;

export interface NewsItem {
  id: number;
  day: string;
  month: string;
  title: string;
  excerpt: string;
  category: string;
}

const Home = () => {
  return (
    <HomeWrapper>
      <Gallery />
      <NewsSection />
    </HomeWrapper>
  );
};

export default Home;
