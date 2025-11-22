// src/pages/News/NewsSection.tsx
import React from "react";
import styled from "styled-components";
import { useNews } from "../../hooks/useNews";
import { BREAKPOINTS } from "../../styles/breakpoints";

// --- STYLED COMPONENTS – skopiowane z Home i zamknięte lokalnie ---

const Section = styled.section`
  background: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
`;

const SectionTitle = styled.h3`
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

const NewsGrid = styled.div`
  display: grid;
  gap: 25px;
  @media (max-width: ${BREAKPOINTS.tablet}) {
    gap: 18px;
  }
`;

const NewsCard = styled.article`
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
  @media (max-width: ${BREAKPOINTS.tablet}) {
    padding: 16px;
    gap: 14px;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NewsDate = styled.div`
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
  @media (max-width: ${BREAKPOINTS.mobile}) {
    flex-direction: row;
    gap: 8px;
    min-width: auto;
    padding: 8px 10px;
    .day {
      font-size: 20px;
    }
    .month {
      font-size: 12px;
    }
  }
`;

const NewsContent = styled.div`
  flex: 1;
`;

const NewsTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 8px;
  line-height: 1.4;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 16px;
  }
`;

const NewsExcerpt = styled.p`
  color: #718096;
  line-height: 1.6;
  margin-bottom: 12px;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 13px;
    margin-bottom: 10px;
  }
`;

const NewsMeta = styled.div`
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

const InfoText = styled.p`
  margin: 0;
  color: #718096;
`;

// --- KOMPONENT ---

const NewsSection: React.FC = () => {
  const { news, loading, error } = useNews();

  return (
    <Section>
      <SectionTitle>Aktualności</SectionTitle>

      {loading && <InfoText>Ładuję aktualności...</InfoText>}
      {error && <InfoText>{error}</InfoText>}
      {!loading && !error && !news.length && (
        <InfoText>Brak aktualności.</InfoText>
      )}

      {!loading && !error && news.length > 0 && (
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
                  {/* <span>Czytaj więcej →</span> */}
                </NewsMeta>
              </NewsContent>
            </NewsCard>
          ))}
        </NewsGrid>
      )}
    </Section>
  );
};

export default NewsSection;
