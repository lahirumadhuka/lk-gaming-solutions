import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const isLogin = true;

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary px-5"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <NavLink to={"/"} className="navbar-brand">
            LK Gaming Solutions
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <NavLink
                  to={"/"}
                  className={`nav-link me-5 ${location.pathname === "/" ? "active" : ""}`}
                >
                  Home <i className="bi bi-house-fill"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/play-station"}
                  className={`nav-link me-5 ${location.pathname.startsWith("/play-station/") ? "active" : ""}`}
                >
                  Play Station <i className="bi bi-playstation"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/xbox"}
                  className={`nav-link me-5 ${
                    location.pathname.startsWith("/xbox/") ? "active" : ""
                  }`}
                >
                  Xbox <i className="bi bi-xbox"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/pc"}
                  className={`nav-link me-5 ${location.pathname.startsWith("/pc/") ? "active" : ""}`}
                >
                  PC <i className="bi bi-pc"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                {isLogin ? (
                    <li class="nav-item dropdown">
                      <i className="bi bi-person-circle nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item">Profile</a></li>
                        <li><a class="dropdown-item">Settings</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item">Logout</a></li>
                      </ul>
                    </li>
                ) : (
                  <NavLink
                    to={"/login"}
                    className={`nav-link ${location.pathname === "/login" ? "active" : ""}`}
                  >
                    Login
                  </NavLink>
                )}
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
