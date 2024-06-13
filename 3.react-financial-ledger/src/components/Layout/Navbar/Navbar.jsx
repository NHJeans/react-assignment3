import styled from "styled-components";
import Logout from "../../Auth/Logout";
import { Link } from "react-router-dom";
import Profile from "../../Profile";

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">MyApp</Logo>
      <NavLinks>
        <Profile />
        <Logout>로그아웃</Logout>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #7ab2b2;
  padding: 10px 20px;
  color: white;
`;

export const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-decoration: none;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;
