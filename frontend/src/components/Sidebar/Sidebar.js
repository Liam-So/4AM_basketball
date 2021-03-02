import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import "./Sidebar.css";

const Nav = styled.div`
<<<<<<< HEAD
=======
  // background: #15171c;
  background: transparent;
>>>>>>> a38abe884491a7fec87088a6eb1bdbb0174df832
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-right: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
<<<<<<< HEAD
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav className="color">
          <NavIcon to="#" style={{ margin: 0 }}>
            <FaIcons.FaBars onClick={showSidebar} />
=======
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
            <Link to='/' className='image'>
                <img src={Logo} alt='logo' />
            </Link>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} style={{color: '#fe4e50'}}/>
>>>>>>> a38abe884491a7fec87088a6eb1bdbb0174df832
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return (
                <SubMenu item={item} key={index} parentMethod={showSidebar} />
              );
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
