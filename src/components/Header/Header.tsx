// import styled from "styled-components";

// import React from "react";
// import Dropdown from "../DropDown/Dropdown";

// const HeaderWrapper = styled.header`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   /* background: linear-gradient(90deg, #004aad, #0066cc); */
//   color: white;
//   padding: 20px 0;
//   position: relative;
//   z-index: 100; /* 🔥 */
// `;

// const Title = styled.h1`
//   margin: 0;
//   font-size: 36px;
//   font-weight: 800;
// `;

// const Nav = styled.nav`
//   margin-top: 24px;
// `;

// const NavList = styled.ul`
//   display: flex;
//   gap: 30px;
//   list-style: none;
//   margin: 0;
//   padding: 0;
// `;

// const NavItem = styled.li`
//   list-style: none;
// `;

// const menu = [
//   { label: "Aktualności", items: [], url: "/" },
//   {
//     label: "Sekcja Rychwał",
//     items: [],
//     url: "/rychwal",
//   },
//   {
//     label: "Sekcja Stawiszyn",
//     items: [],
//     url: "/stawiszyn",
//   },
//   {
//     label: "Sekcja Grodziec",
//     items: [],
//     url: "/grodziec",
//   },
//   {
//     label: "Sekcja Władysławów",
//     items: [],
//     url: "/wladyslawow",
//   },
//   {
//     label: "Sekcja Malanów",
//     items: [],
//     url: "/malanow",
//   },
//   {
//     label: "Sekcja Tuliszków",
//     items: [],
//     url: "/tuliszkow",
//   },

//   {
//     label: "Dokumenty",
//     items: [],
//     url: "/document",
//   },

//   { label: "Kontakt", items: [], url: "/kontakt" },
// ];

// const Header = () => {
//   return (
//     <HeaderWrapper>
//       <Title>Akademia Sportu</Title>
//       <Nav>
//         <NavList>
//           {menu.map((m) => (
//             <NavItem key={m.label}>
//               <Dropdown label={m.label} items={m.items} url={m.url} />
//             </NavItem>
//           ))}
//         </NavList>
//       </Nav>
//     </HeaderWrapper>
//   );
// };

// export default Header;

import styled from "styled-components";
import React, { useState } from "react";
import Dropdown from "../DropDown/Dropdown";
import { BREAKPOINTS } from "../../styles/breakpoints";
import { useLocation } from "react-router-dom";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 20px 0;
  position: relative;
  z-index: 100;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 36px;
  font-weight: 800;
  @media (max-width: ${BREAKPOINTS.tablet}) {
    font-size: 32px;
  }
  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 28px;
  }
`;

/* DESKTOP NAV – wygląd jak był, ale z animowanym podkreśleniem */
const DesktopNav = styled.nav`
  margin-top: 24px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: none;
  }
`;

const DesktopNavList = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 1440px) {
    gap: 20px;
  }

  @media (max-width: ${BREAKPOINTS.laptop}) {
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const DesktopNavItem = styled.li<{ $active?: boolean }>`
  list-style: none;
  position: relative;

  /* bazowa linia (0 szerokości) – dzięki temu animacja jest płynna */
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -6px;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    border-radius: 999px;
    background: #4fd3ff;
    opacity: 0;
    transition: width 0.2s ease, opacity 0.2s ease, background 0.2s ease;
  }

  ${({ $active }) =>
    $active &&
    `
    &::after {
      width: 60%;
      opacity: 1;
      background: #4fd3ff;
    }
  `}

  &:hover::after {
    width: 60%;
    opacity: 1;
    background: rgba(79, 211, 255, 0.75);
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      transition: none;
    }
  }
`;

/* HAMBURGER – tylko mobile/tablet */
const MobileToggle = styled.button<{ $open: boolean }>`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 6px;
  display: none;
  z-index: 110;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 999px;
    background: white;
    position: relative;
    transition: transform 0.2s ease, opacity 0.2s ease;

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      width: 22px;
      height: 2px;
      border-radius: 999px;
      background: white;
      transition: transform 0.2s ease, top 0.2s ease, opacity 0.2s ease;
    }

    &::before {
      top: -6px;
    }

    &::after {
      top: 6px;
    }
  }

  ${({ $open }) =>
    $open &&
    `
    span {
      transform: rotate(45deg);
    }
    span::before {
      top: 0;
      transform: rotate(90deg);
    }
    span::after {
      top: 0;
      opacity: 0;
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    span,
    span::before,
    span::after {
      transition: none;
    }
  }
`;

/* MOBILE NAV – full-screen overlay z animacją fade + slide */
const MobileNavOverlay = styled.nav<{ $open: boolean }>`
  display: none;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: flex;
    position: fixed;
    inset: 0;
    z-index: 105;
    padding: 100px 24px 32px;
    box-sizing: border-box;

    background: radial-gradient(
      circle at top,
      #0066cc 0%,
      #001532 55%,
      #000814 100%
    );
    backdrop-filter: blur(4px);

    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;

    /* animacja */
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    transform: translateY(${({ $open }) => ($open ? "0" : "-8px")});
    pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
    transition: opacity 0.25s ease, transform 0.25s ease;
  }

  @media (prefers-reduced-motion: reduce) {
    @media (max-width: ${BREAKPOINTS.tablet}) {
      transition: none;
    }
  }
`;

const MobileNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 360px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MobileNavItem = styled.li<{ $active?: boolean }>`
  list-style: none;
  width: 100%;

  button,
  a {
    width: 100%;
  }

  > * {
    display: flex;
    justify-content: center;
    padding: 10px 14px;
    border-radius: 999px;
    background: ${({ $active }) =>
      $active ? "rgba(0, 180, 255, 0.18)" : "transparent"};
    color: ${({ $active }) => ($active ? "#4fd3ff" : "#e2e8f0")};
    font-weight: 500;
    font-size: 15px;
    text-decoration: none;
    transition: background 0.2s ease, color 0.2s ease, transform 0.15s ease,
      box-shadow 0.15s ease;
  }

  > *:hover {
    background: ${({ $active }) =>
      $active ? "rgba(0, 180, 255, 0.25)" : "rgba(255, 255, 255, 0.08)"};
    color: #ffffff;
    transform: translateY(-1px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);
  }

  @media (prefers-reduced-motion: reduce) {
    > * {
      transition: none;
      transform: none;
      box-shadow: none;
    }
  }
`;

const menu = [
  { label: "Aktualności", items: [], url: "/" },
  { label: "Sekcja Rychwał", items: [], url: "/rychwal" },
  { label: "Sekcja Stawiszyn", items: [], url: "/stawiszyn" },
  { label: "Sekcja Grodziec", items: [], url: "/grodziec" },
  { label: "Sekcja Władysławów", items: [], url: "/wladyslawow" },
  { label: "Sekcja Malanów", items: [], url: "/malanow" },
  { label: "Sekcja Tuliszków", items: [], url: "/tuliszkow" },
  { label: "Dokumenty", items: [], url: "/document" },
  { label: "Kontakt", items: [], url: "/kontakt" },
];

const Header: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const toggleMobile = () => setIsMobileOpen((prev) => !prev);
  const closeMobile = () => setIsMobileOpen(false);

  const isItemActive = (url: string) => {
    const path = location.pathname;

    if (url === "/") {
      return path === "/" || path === "/judoWeb/" || path === "/judoWeb";
    }

    return path.endsWith(url);
  };

  return (
    <HeaderWrapper>
      <Title>Akademia Sportu</Title>

      <MobileToggle
        $open={isMobileOpen}
        onClick={toggleMobile}
        aria-label={isMobileOpen ? "Zamknij menu" : "Otwórz menu"}
      >
        <span />
      </MobileToggle>

      {/* DESKTOP NAV */}
      <DesktopNav>
        <DesktopNavList>
          {menu.map((m) => (
            <DesktopNavItem key={m.label} $active={isItemActive(m.url)}>
              <Dropdown label={m.label} items={m.items} url={m.url} />
            </DesktopNavItem>
          ))}
        </DesktopNavList>
      </DesktopNav>

      {/* MOBILE FULL-SCREEN NAV */}
      <MobileNavOverlay $open={isMobileOpen}>
        <MobileNavList>
          {menu.map((m) => (
            <MobileNavItem
              key={m.label}
              $active={isItemActive(m.url)}
              onClick={closeMobile}
            >
              <Dropdown label={m.label} items={m.items} url={m.url} />
            </MobileNavItem>
          ))}
        </MobileNavList>
      </MobileNavOverlay>
    </HeaderWrapper>
  );
};

export default Header;
