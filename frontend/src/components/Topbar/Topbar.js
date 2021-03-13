import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  Container,
  Badge
} from "@material-ui/core";
import { DropdownData } from "./DropdownData";
import "./Topbar.css";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import Sidebar from "../Sidebar/Sidebar";
import { ShoppingCart } from '@material-ui/icons'
import { useStateValue } from "../StateProvider" 
import { getTotalItems } from "../reducer"



function Topbar({ transparent }) {

  const [{ basket }] = useStateValue();

  return (
    <AppBar position="static" color="secondary" elevation={0}>
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
                <div className="dropdown" key={index}>
                  <Link to={item.path}>
                    <button className={transparent ? "drop-btn-blk" : "dropbtn"}>{item.title === 'Cart' ? <Badge badgeContent={getTotalItems(Object.values(basket))} color="secondary"> <ShoppingCart /> </Badge>: item.title}</button>
                  </Link>
                  <div className="dropdown-content">
                    {item.subNav.map((s, i) => (
                      <Link to={s.path} key={i}>{s.title}</Link>
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
}

export default Topbar;
