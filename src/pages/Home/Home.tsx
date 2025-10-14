import React from "react";
import Gallery from "../../components/GallerySection/Gallery";
import styled from "styled-components";

export const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 60px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Section = styled.section`
  background: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
`;

export const SectionTitle = styled.h3`
  margin-bottom: 25px;
  font-size: 24px;
  color: #004aad;
  font-weight: 700;
  position: relative;
  padding-bottom: 10px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #004aad, #00a8ff);
    border-radius: 2px;
  }
`;

export const NewsGrid = styled.div`
  display: grid;
  gap: 25px;
`;

export const NewsCard = styled.article`
  display: flex;
  gap: 20px;
  padding: 20px;
  background: #f8fafc;
  border-radius: 12px;
  border-left: 4px solid #004aad;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 74, 173, 0.15);
    background: white;
  }
`;

export const NewsDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 70px;
  padding: 10px;
  background: #004aad;
  color: white;
  border-radius: 8px;
  text-align: center;

  .day {
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
  }

  .month {
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
  }
`;

export const NewsContent = styled.div`
  flex: 1;
`;

export const NewsTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 8px;
  line-height: 1.4;
`;

export const NewsExcerpt = styled.p`
  color: #718096;
  line-height: 1.6;
  margin-bottom: 12px;
`;

export const NewsMeta = styled.div`
  display: flex;
  gap: 15px;
  font-size: 14px;
  color: #a0aec0;

  .category {
    color: #004aad;
    font-weight: 500;
    background: #e6f2ff;
    padding: 2px 8px;
    border-radius: 4px;
  }
`;

const Home = () => {
  const news = [
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

      <Section>
        <SectionTitle>Aktualności</SectionTitle>
        <NewsGrid>
          {news.map((item) => (
            <NewsCard key={item.id}>
              <NewsDate>
                <span className="day">{item.day}</span>
                <span className="month">{item.month}</span>
              </NewsDate>
              <NewsContent>
                <NewsTitle>{item.title}</NewsTitle>
                <NewsExcerpt>{item.excerpt}</NewsExcerpt>
                <NewsMeta>
                  <span className="category">{item.category}</span>
                  <span>Czytaj więcej →</span>
                </NewsMeta>
              </NewsContent>
            </NewsCard>
          ))}
        </NewsGrid>
      </Section>
    </HomeWrapper>
  );
};

export default Home;
