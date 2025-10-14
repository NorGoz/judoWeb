import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 60px;
  background: linear-gradient(90deg, #004aad, #0066cc);
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const Logo = styled.h2`
  font-size: 40px;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 35px;
`;

export const NavItem = styled.div`
  position: relative;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #ffea00;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 35px;
  left: 0;
  background: white;
  color: #004aad;
  border-radius: 8px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  min-width: 160px;
  z-index: 10;

  div {
    padding: 8px 15px;
    font-weight: 500;
    transition: 0.2s;
    &:hover {
      background: #f4f4f4;
    }
  }
`;
