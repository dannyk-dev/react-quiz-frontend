import styled from "styled-components";

export const Navbar = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 80px;
`;

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled.div`
  height: 56px;
  width: 56px;
  object-fit: contain;
`;

export const NavLinks = styled.div`
  display: flex;
`;

export const NavLink = styled.span`
  text-decoration: none;
  color: #444;
  font-size: 20px;
  text-align: center;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 8px;
  display: block;
  /* display: flex; */
  align-items: flex-start;
  transition: all 0.15s linear;

  &:hover {
    background: #444;

    box-shadow: 2px 3px 12px rgba(12, 12, 12, 0.24);
    color: #fcfefc;
  }
`;
