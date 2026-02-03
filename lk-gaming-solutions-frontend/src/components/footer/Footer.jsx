import logo from "../../assets/logo.png";
import "./Footer.css"
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="pt-5 pb-3 footer px-lg-5 px-3 shadow-lg">
        <div className="container-fluid">
          {/* Trust Badges */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="d-flex flex-wrap gap-3 gap-lg-5 justify-content-center">
                <div>
                  <i className="bi bi-shield-check me-1"></i>
                  <span>Secure Checkout</span>
                </div>
                <div>
                  <i className="bi bi-lightning-charge-fill me-1"></i>
                  <span>Instant Key Delivery</span>
                </div>
                <div>
                  <i className="bi bi-headset me-1"></i>
                  <span>24/7 Buyer Protection</span>
                </div>
                <div>
                  <i className="bi bi-star-fill me-1"></i>
                  <span>100K+ Trusted Sellers</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Brand Info */}
            <div className="col-lg-4 mb-4">
              <h5 className="mb-3">
                <img src={logo} style={{ width: "25px" }} className="me-2" alt="logo" />
                <span style={{ color: "#BD9B52" }}>LK Gaming Solutions</span>
              </h5>
              <p style={{textAlign:"justify"}}>
                The trusted marketplace where gamers buy and sell digital game keys. Find the best deals from verified sellers or list your unused keys for instant cash.
              </p>
              <div className="d-flex gap-3 mt-4 fs-5">
                <a href="#" aria-label="Discord">
                  <i className="bi bi-discord text-white"></i>
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="bi bi-twitter-x text-white"></i>
                </a>
                <a href="#" aria-label="Facebook">
                  <i className="bi bi-facebook text-white"></i>
                </a>
                <a href="#" aria-label="Reddit">
                  <i className="bi bi-reddit text-white"></i>
                </a>
                <a href="#" aria-label="YouTube">
                  <i className="bi bi-youtube text-white"></i>
                </a>
              </div>
            </div>

            {/* Game Categories */}
            <div className="col-lg-3 col-md-4 mb-4 ps-lg-5">
              <h6 className="mb-3">Games</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <NavLink to={"/play-station"} className="small footer-link">
                    <i className="bi bi-playstation me-1"></i>PlayStation
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/xbox"} className="small footer-link">
                    <i className="bi bi-xbox me-1"></i>Xbox
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/pc"} className="small footer-link">
                    <i className="bi bi-pc-display me-1"></i>PC
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/hot-deals"} className="footer-link small">
                    <i className="bi bi-fire me-1"></i>Hot Deals
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="col-lg-3 col-md-4 mb-4">
              <h6 className="mb-3">Support</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <NavLink className="small footer-link">How It Works</NavLink>
                </li>
                <li className="mb-2">
                  <NavLink className="small footer-link">FAQ</NavLink>
                </li>
                <li className="mb-2">
                  <NavLink className="small footer-link">Contact Us</NavLink>
                </li>
                <li className="mb-2">
                  <NavLink  className="small footer-link">Report Issue</NavLink>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-lg-2 col-md-4 mb-4">
              <h6 className="mb-3">Stay Updated</h6>
              <p className="mb-3 small">
                Get exclusive deals & new game alerts!
              </p>
              <form>
                <input
                  type="email"
                  className="form-control form-control-sm mb-2"
                  placeholder="your@email.com"
                  aria-label="Email"
                />
                <button type="submit" className="btn btn-primary btn-sm w-100" style={{ backgroundColor: "#BD9B52", border: 0 }}>
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="row mt-4 pt-4 border-top" style={{borderColor: '#2a313d !important'}}>
            <div className="col-12 mb-3">
              <h6 className="mb-3">
                SECURE PAYMENT METHODS
              </h6>
              <div className="d-flex flex-wrap gap-3">
                <div>VISA</div>
                <div>MC</div>
                <div>AMEX</div>
                <div>
                  <i className="bi bi-paypal"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="row mt-3 pt-3 border-top" style={{borderColor: '#2a313d !important'}}>
            <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
              <p className="mb-0">
                © {currentYear} LK Gaming Solutions. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">
                Powered by gamers, for gamers <i className="bi bi-controller"></i>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;