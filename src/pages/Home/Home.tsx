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
  const newss = [
    {
      id: 1,
      day: "15",
      month: "MAR",
      title: "Mistrzostwa Polski Seniorów w Judo 2024",
      excerpt:
        "Zapraszamy wszystkich zawodników na nadchodzące Mistrzostwa Polski, które odbędą się w Warszawie. Zgłoszenia przyjmowane są do 30 marca.",
      category: "Zawody",
    },
    {
      id: 2,
      day: "22",
      month: "MAR",
      title: "Seminarium techniczne z mistrzem świata",
      excerpt:
        "Wyjątkowa okazja do treningu pod okiem mistrza świata - Adam Smith. Seminarium obejmuje zaawansowane techniki rzutów i trzymań.",
      category: "Szkolenie",
    },
    {
      id: 3,
      day: "05",
      month: "KWI",
      title: "Nowe grupy treningowe dla dzieci i młodzieży",
      excerpt:
        "Ruszyły zapisy do nowych grup treningowych. Zajęcia prowadzone są przez doświadczonych trenerów z podejściem pedagogicznym.",
      category: "Rekrutacja",
    },
    {
      id: 4,
      day: "12",
      month: "KWI",
      title: "Turniej Młodzików - zapisy otwarte",
      excerpt:
        "Zapraszamy młodych adeptów judo do udziału w tradycyjnym wiosennym turnieju. Nagrody i puchary dla najlepszych.",
      category: "Zawody",
    },
  ];

  return (
    <HomeWrapper>
      <Gallery />
      <NewsSection />
    </HomeWrapper>
  );
};

export default Home;
