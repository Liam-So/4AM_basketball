import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import "./Sidebar.css";
import Logo from "../../images/logo.png";

const Nav = styled.div`
  background: #15171c;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const NavIcon = styled(Link)`
  margin-right: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

// const SidebarNav = styled.nav`
//   background: #15171c;
//   width: 250px;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   top: 0;
//   right: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
//   transition: 350ms;
//   z-index: 10;
// `;

const SidebarWrap = styled.div`
  width: 100%;
  display: flex;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Nav>
        <Link to="/" className="image">
          <img src={Logo} alt="logo" />
        </Link>
        {SidebarData.map((item, index) => {
          return <SubMenu item={item} key={index} />;
        })}
      </Nav>
    </>
  );
};

export default Sidebar;
