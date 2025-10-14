import styled from "styled-components";

import React from "react";
import Dropdown from "../DropDown/Dropdown";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: linear-gradient(90deg, #004aad, #0066cc); */
  color: white;
  padding: 20px 0;
  position: relative;
  z-index: 100; /* 🔥 */
`;

const Title = styled.h1`
  margin: 0;
  font-size: 36px;
  font-weight: 800;
`;

const Nav = styled.nav`
  margin-top: 24px;
`;

const NavList = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  list-style: none;
`;

const menu = [
  { label: "Aktualności", items: [], url: "/" },
  {
    label: "Sekcja Tuliszków",
    items: ["Zajęcia", "Trenerzy", "Zapisz się"],
    url: "/tuliszkow",
  },
  {
    label: "Sekcja Rychwał",
    items: ["Zajęcia", "Trenerzy", "Zapisz się"],
    url: "/rychwal",
  },
  {
    label: "Sekcja Malanów",
    items: ["Zajęcia", "Trenerzy", "Zapisz się"],
    url: "/malanow",
  },
  {
    label: "Sekcja Przykona",
    items: ["Zajęcia", "Trenerzy", "Zapisz się"],
    url: "/przykona",
  },
  {
    label: "Dokumenty",
    items: ["Regulamin", "Polityka prywatności", "RODO"],
    url: "",
  },
  {
    label: "Galeria",
    items: ["Zajęcia", "Trenerzy", "Zapisz się"],
    url: "/",
  },
  { label: "Kontakt", items: [], url: "/kontakt" },
];

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>Akademia Sportu</Title>
      <Nav>
        <NavList>
          {menu.map((m) => (
            <NavItem key={m.label}>
              <Dropdown label={m.label} items={m.items} url={m.url} />
            </NavItem>
          ))}
        </NavList>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
