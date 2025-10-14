import styled from "styled-components";

export const SponsorWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  /* padding-top: 40px; */
  min-width: 200px;
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
`;
