import React from "react";
import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ContactWrapper = styled.section`
  background: #ffffff;
  padding: 40px 20px;
  border-radius: 12px;
  margin: 40px auto;
  max-width: 900px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 28px;
  animation: ${fadeInUp} 0.3s ease-out;

  @media (max-width: 768px) {
    margin: 24px auto;
    padding: 24px 16px;
    gap: 20px;
  }
`;

const ContactTitle = styled.h2`
  text-align: center;
  color: #0a3978;
  font-size: 28px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const ContactSubtitle = styled.p`
  text-align: center;
  color: #555;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 4px;
  }
`;

const ContactGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const ContactCard = styled.div`
  flex: 1 1 230px;
  min-width: 230px;
  background: #f4f7fb;
  border-radius: 12px;
  padding: 16px 18px;
  display: flex;
  align-items: center;
  gap: 14px;
  border-left: 6px solid #0a3978;
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 14px rgba(0, 74, 173, 0.15);
    }
  }

  @media (max-width: 600px) {
    padding: 14px;
    gap: 12px;
    min-width: 100%;
    flex: auto;
  }
`;

const IconCircle = styled.div`
  width: 44px;
  height: 44px;
  background: #0a3978;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 22px;
  flex-shrink: 0;

  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  @media (max-width: 600px) {
    gap: 2px;
  }
`;

const ContactLabel = styled.span`
  font-size: 11px;
  text-transform: uppercase;
  color: #777;
  letter-spacing: 0.06em;
`;

const ContactLink = styled.a`
  font-size: 15px;
  color: #0a3978;
  font-weight: 600;
  text-decoration: none;
  word-break: break-word;
  transition: opacity 0.2s, transform 0.15s;

  &:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const ContactText = styled.span`
  font-size: 15px;
  color: #222;
  font-weight: 600;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const BottomInfo = styled.p`
  font-size: 12px;
  color: #666;
  text-align: center;
  margin-top: 4px;

  @media (max-width: 600px) {
    font-size: 11px;
  }
`;

export const ContactSection: React.FC = () => {
  return (
    <ContactWrapper>
      <ContactTitle>Kontakt</ContactTitle>
      <ContactSubtitle>
        Masz pytania dotyczące zapisów lub zajęć? Skontaktuj się z nami.
      </ContactSubtitle>

      <ContactGrid>
        <ContactCard>
          <IconCircle>👤</IconCircle>
          <ContactContent>
            <ContactLabel>Trener / kontakt główny</ContactLabel>
            <ContactText>Michał Gaj</ContactText>
          </ContactContent>
        </ContactCard>

        <ContactCard>
          <IconCircle>📞</IconCircle>
          <ContactContent>
            <ContactLabel>Telefon</ContactLabel>
            <ContactLink href="tel:782560182">782 560 182</ContactLink>
          </ContactContent>
        </ContactCard>

        <ContactCard>
          <IconCircle>✉️</IconCircle>
          <ContactContent>
            <ContactLabel>E-mail</ContactLabel>
            <ContactLink href="mailto:michalg87@op.pl">
              michalg87@op.pl
            </ContactLink>
          </ContactContent>
        </ContactCard>

        <ContactCard>
          <IconCircle>📘</IconCircle>
          <ContactContent>
            <ContactLabel>Facebook</ContactLabel>
            <ContactLink
              href="https://www.facebook.com/judotuliszkow"
              target="_blank"
              rel="noreferrer"
            >
              https://www.facebook.com/judotuliszkow
            </ContactLink>
          </ContactContent>
        </ContactCard>

        <ContactCard>
          <IconCircle>📷</IconCircle>
          <ContactContent>
            <ContactLabel>Instagram</ContactLabel>
            <ContactLink
              href="https://www.instagram.com/judotuliszkow/"
              target="_blank"
              rel="noreferrer"
            >
              @judotuliszkow
            </ContactLink>
          </ContactContent>
        </ContactCard>

        <ContactCard>
          <IconCircle>🎵</IconCircle>
          <ContactContent>
            <ContactLabel>TikTok</ContactLabel>
            <ContactLink
              href="https://www.tiktok.com/@ukstuliszkow?_t=ZG-90sJtHyGkfQ&_r=1"
              target="_blank"
              rel="noreferrer"
            >
              @ukstuliszkow
            </ContactLink>
          </ContactContent>
        </ContactCard>
      </ContactGrid>

      <BottomInfo>
        Preferujesz kontakt mailowy? Napisz kilka słów o dziecku i sekcji —
        odezwiemy się z potwierdzeniem terminu.
      </BottomInfo>
    </ContactWrapper>
  );
};

export default ContactSection;
