// import React from "react";
// import { IUser } from "../../types/User.types";

import { LinkButton } from "../../Buttons";
import {
  NavLink,
  NavLinks,
  NavLogo,
  NavWrapper,
  Navbar,
} from "../../Layout/Navbar";

// interface IHeaderProps {
//   user?: IUser | null;
// }

export const Header = () => {
  return (
    <Navbar>
      <NavWrapper>
        <NavLogo>ProgrammingQuizApp</NavLogo>
        <NavLinks>
          <NavLink>
            <LinkButton to="/">Home</LinkButton>
          </NavLink>
          <NavLink>
            <LinkButton to="/products">Products</LinkButton>
          </NavLink>
        </NavLinks>
      </NavWrapper>
    </Navbar>
  );
};
