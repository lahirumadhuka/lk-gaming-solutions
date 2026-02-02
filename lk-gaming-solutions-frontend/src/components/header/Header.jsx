import { NavLink } from "react-router-dom";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/logo.png";

const Header = () => {
  const isLogin = true;

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary px-lg-5 px-3 header"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand as={NavLink} to={"/"}>
          <img src={logo} style={{ width: "25px" }} className="me-2" alt="logo" />
          <span style={{ color: "#BD9B52" }}>LK Gaming Solutions</span>
        </Navbar.Brand>
        <Nav.Link as={NavLink} to={"/cart"} className="d-lg-none ms-5">
          <i className="bi bi-cart-fill"></i> 0
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className="mx-auto me-lg-3" as={NavLink} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link className="mx-auto me-lg-3" as={NavLink} to={"/play-station"}>
              PlayStation
            </Nav.Link>
            <Nav.Link className="mx-auto me-lg-3" as={NavLink} to={"/xbox"}>
              Xbox
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/pc"} className="mx-auto">
              PC
            </Nav.Link>
            {isLogin ? (
              <>
                <Nav.Link className="d-lg-none mx-auto" as={NavLink} to={"/profile"}>
                  Profile
                </Nav.Link>
                <Nav.Link className="d-lg-none mx-auto" as={NavLink} to={"/settings"}>
                  Settings
                </Nav.Link>
                <Nav.Link className="d-lg-none mx-auto">Logout</Nav.Link>
              </>
            ) : (
              <Nav.Link className="d-lg-none mx-auto" as={NavLink} to={"/login"}>
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
        <div className="d-none d-lg-block">
          <Nav>
            <Nav.Link
              as={NavLink}
              to={"/cart"}
              className="d-none d-lg-block me-lg-5"
            >
              <i className="bi bi-cart-fill"></i> 0
            </Nav.Link>
            {isLogin ? (
              <NavDropdown
                className="d-none d-lg-block"
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
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link className="d-none d-lg-block" as={NavLink} to={"/login"}>
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
