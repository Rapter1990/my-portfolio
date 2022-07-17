import React,{ useEffect, useState  } from 'react'
import {
  Nav,
  Navbar,
} from "react-bootstrap";
import {
  HomeRounded,
} from "@material-ui/icons";
import ProfileData from 'util/ProfileData';
import "./Header.css";
import {
  NavLink, useLocation 
} from 'react-router-dom';


const Header = () => {

  let location = useLocation();
  let [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(location.pathname)
  }, [location]);

  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Nav.Link as={NavLink} to="/" className="header_navlink">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_left">
          <Nav.Link as={NavLink} to="/resume" className={pathname === "/resume" ? "header_link_active" : "header_link" }>
            Resume
          </Nav.Link>
          <Nav.Link as={NavLink} to="/service" className={pathname === "/service" ? "header_link_active" : "header_link" }>
            Service
          </Nav.Link>
          <Nav.Link as={NavLink} to="/portfolio" className={pathname === "/portfolio" ? "header_link_active" : "header_link" }>
            Portfolio
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" className={pathname === "/contact" ? "header_link_active" : "header_link" }>
            Contact
          </Nav.Link>
        </Nav>

        <div className="header_right">
          {Object.keys(ProfileData.socials).map((key) => (
              <a key={key} href={ProfileData.socials[key].link} target="_blank">
                {ProfileData.socials[key].icon}
              </a>
          ))}
        </div>  
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
