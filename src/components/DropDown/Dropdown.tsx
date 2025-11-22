import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { slugify } from "../../utils/slugify";

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.div`
  padding: 10px 16px;
  cursor: pointer;
  font-weight: 600;
  color: white;
  user-select: none;
  opacity: 0.9;
  transition: all 0.2s ease;
  font-size: 16px;
  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }
  @media (max-width: 1440px) {
    font-size: 14px;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  color: #004aad;
  min-width: 180px;
  border-radius: 8px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  opacity: 0;
  pointer-events: none;
  transform: translateY(6px);
  transition: all 0.2s ease;
  z-index: 999; /* 🔥 ważne */
  overflow: hidden;

  ${DropdownWrapper}:hover & {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }
`;

const DropdownItem = styled.div`
  padding: 10px 14px;
  cursor: pointer;
  transition: background 0.15s;
  &:hover {
    background: #f4f4f4;
  }
`;

interface DropdownProps {
  label: string;
  items: string[];
  url?: string;
}

const Dropdown = ({ label, items, url }: DropdownProps) => {
  const navigate = useNavigate();
  return (
    <DropdownWrapper>
      <DropdownButton
        onClick={() => (url ? navigate(url) : console.log("nic sie nie dzije"))}
      >
        {label}
      </DropdownButton>
      <DropdownMenu>
        {items.map((item) => (
          <DropdownItem
            onClick={() =>
              item === "Zapisz się"
                ? navigate(`${url}/${slugify(item)}`)
                : console.log("nic")
            }
            key={item}
          >
            {item}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownWrapper>
  );
};

export default Dropdown;
