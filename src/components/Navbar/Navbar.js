import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { SidebarData } from "../Sidebar/SidebarData";
import { DropdownData } from "./DropdownData";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import Sidebar from "../Sidebar/Sidebar";

const useStyles = makeStyles({
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Container className="navbarDisplay">
          <div className="float-right md:hidden">
            <Sidebar />
          </div>
          <IconButton
            className="nav_logo"
            edge="start"
            color="inherit"
            aria-label="home"
          >
            <Link to="/">
              <img className="nav_logo" src={Logo} alt="logo" />
            </Link>
          </IconButton>
          <div className="hidden float-right md:flex">
            <List
              component="nav"
              aria-labelledby="main navigation"
              className="navDisplay"
            >
              {DropdownData.map((item, index) => (
                <div class="dropdown" key={index}>
                  <Link to={item.path}>
                    <button class="dropbtn">{item.title}</button>
                  </Link>
                  <div class="dropdown-content">
                    {item.subNav.map((s, i) => (
                      <Link to={s.path}>{s.title}</Link>
                    ))}
                  </div>
                </div>
              ))}
            </List>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
