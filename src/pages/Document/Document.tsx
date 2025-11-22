import React from "react";
import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.section`
  background: #ffffff;
  padding: 40px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  margin: 40px auto;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  animation: ${fadeInUp} 0.25s ease-out;

  @media (max-width: 768px) {
    margin: 24px auto;
    padding: 24px 16px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    gap: 18px;
  }
`;

const Title = styled.h2`
  text-align: center;
  color: #0a3978;
  font-size: 28px;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 6px;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 14px;
  color: #555;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const DocsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 14px;
  }
`;

const DocCard = styled.div`
  flex: 1 1 260px;
  min-width: 280px;
  background: #f4f7fb;
  border-radius: 10px;
  padding: 18px 20px;
  display: flex;
  gap: 14px;
  align-items: center;
  border-left: 6px solid #0a3978;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 14px rgba(0, 74, 173, 0.15);
      background: #f8fbff;
    }
  }

  @media (max-width: 900px) {
    flex: 1 1 100%;
    min-width: 0;
  }

  @media (max-width: 600px) {
    padding: 14px 14px;
    gap: 10px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const IconCircle = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 999px;
  background: #0a3978;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
  flex-shrink: 0;

  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
`;

const DocInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 600px) {
    gap: 2px;
  }
`;

const DocName = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #0a3978;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const DocSize = styled.div`
  font-size: 12px;
  color: #555;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

const DownloadBtn = styled.a`
  margin-left: auto;
  background: #0a3978;
  padding: 6px 10px;
  color: white;
  border-radius: 6px;
  font-size: 13px;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    background: #0c4ea5;
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 3px 8px rgba(0, 74, 173, 0.3);
    }
  }

  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 8px;
    width: 100%;
    text-align: center;
    padding: 7px 10px;
    font-size: 13px;
  }
`;

export interface DocumentItem {
  name: string;
  size?: string;
  url: string;
  type?: "pdf" | "doc" | "img" | "other";
}

const getIcon = (type: string) => {
  switch (type) {
    case "pdf":
      return "📄";
    case "doc":
      return "📘";
    case "img":
      return "🖼️";
    default:
      return "📎";
  }
};

export const DocumentsSection: React.FC = () => {
  const documents: DocumentItem[] = [
    {
      name: "Formularz zgłoszeniowy.pdf",
      size: "120 KB",
      url: "/documents/formularz_zgloszeniowy.pdf",
      type: "pdf",
    },
    {
      name: "Formularz zgłoszeniowy.doc",
      size: "120 KB",
      url: "/documents/formularz_zgloszeniowy.pdf",
      type: "doc",
    },
    {
      name: "Formularz zgłoszeniowy.img",
      size: "120 KB",
      url: "/documents/formularz_zgloszeniowy.pdf",
      type: "img",
    },
    {
      name: "Formularz zgłoszeniowy",
      size: "120 KB",
      url: "/documents/formularz_zgloszeniowy.pdf",
    },
  ];

  return (
    <Wrapper>
      <Title>Dokumenty do pobrania</Title>
      <Subtitle>
        Wszystkie niezbędne pliki i formularze w jednym miejscu.
      </Subtitle>

      <DocsGrid>
        {documents.map((doc, i) => (
          <DocCard key={i}>
            <IconCircle>{getIcon(doc.type || "pdf")}</IconCircle>

            <DocInfo>
              <DocName>{doc.name}</DocName>
              {doc.size && <DocSize>{doc.size}</DocSize>}
            </DocInfo>

            <DownloadBtn href={doc.url} download>
              Pobierz
            </DownloadBtn>
          </DocCard>
        ))}
      </DocsGrid>
    </Wrapper>
  );
};

export default DocumentsSection;
