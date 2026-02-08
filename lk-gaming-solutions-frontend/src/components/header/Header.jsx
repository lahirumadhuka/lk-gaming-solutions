import { NavLink } from "react-router-dom";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/logo.png";
import { useState } from "react";

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Navbar expand="xl" className="px-xl-5 px-3 header shadow-lg">
      <Container fluid>
        <Navbar.Brand
          as={NavLink}
          to={"/"}
          className="navbar-brand d-flex align-content-center"
        >
          <img src={logo} className="me-2" alt="logo" />
          <span className="d-none d-md-block">LK Gaming Solutions</span>
        </Navbar.Brand>
        <div className="d-flex gap-3">
          {isLogin && (
            <Nav.Link as={NavLink} to={"/cart"} className="d-xl-none mt-1">
              <i className="bi bi-cart-fill"></i> 0
            </Nav.Link>
          )}
          <Navbar.Toggle className="nav-toggle">
            <i className="bi bi-list fs-1 nav-toggle-icon"></i>
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              className="mx-auto me-xl-3 mt-1 mt-xl-0"
              as={NavLink}
              to={"/"}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="mx-auto me-xl-3"
              as={NavLink}
              to={"/play-station"}
            >
              <i className="bi bi-playstation me-1"></i>PlayStation
            </Nav.Link>
            <Nav.Link className="mx-auto me-xl-3" as={NavLink} to={"/xbox"}>
              <i className="bi bi-xbox me-1"></i>Xbox
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/pc"} className="mx-auto me-xl-3">
              <i className="bi bi-pc-display me-1"></i>PC
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/hot-deals"} className="mx-auto">
              <i className="bi bi-fire me-1"></i>Hot Deals
            </Nav.Link>
            {isLogin ? (
              <>
                <Nav.Link
                  className="d-xl-none mx-auto"
                  as={NavLink}
                  to={"/profile"}
                >
                  Profile
                </Nav.Link>
                <Nav.Link
                  className="d-xl-none mx-auto"
                  as={NavLink}
                  to={"/settings"}
                >
                  Settings
                </Nav.Link>
                <Nav.Link
                  className="d-xl-none mx-auto"
                  onClick={() => setIsLogin(false)}
                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              <Nav.Link
                className="d-xl-none mx-auto"
                as={NavLink}
                to={"/login"}
              >
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
        <div className="d-none d-xl-block">
          <Nav>
            <Nav.Link
              as={NavLink}
              to={"/cart"}
              className="d-none d-xl-block me-xl-5"
              style={{visibility: `${!isLogin && "hidden"}`}}
            >
              <i className="bi bi-cart-fill"></i> 0
            </Nav.Link>

            {isLogin ? (
              <NavDropdown
                className="d-none d-xl-block"
                title={<i className="bi bi-person-circle"></i>}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={NavLink} to={"/profile"}>
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to={"/settings"}>
                  Settings
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => setIsLogin(false)}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link
                className="d-none d-xl-block"
                as={NavLink}
                to={"/login"}
              >
                Login
              </Nav.Link>
            )}
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
