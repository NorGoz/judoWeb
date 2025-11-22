import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const SponsorWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  /* padding-top: 40px; */
  min-width: 200px;
  /* TABLET — sponsorzy pod treścią */
  @media (max-width: ${BREAKPOINTS.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    width: 100%;
    min-width: 0;
  }

  /* MOBILE — mniejsze odstępy */
  @media (max-width: ${BREAKPOINTS.mobile}) {
    gap: 14px;
  }
`;

export const SponsorLogo = styled.div`
  width: 160px;
  height: 120px;
  background: #fff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
  /* MOBILE — mniejsze kafle */
  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 120px;
    height: 90px;

    img {
      width: 75%;
      height: 75%;
    }
  }
`;
