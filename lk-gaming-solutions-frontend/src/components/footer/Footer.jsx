import logo from "../../assets/logo.png";
import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="pt-5 pb-3 footer px-lg-5 px-3">
        <div className="container-fluid">
          {/* Trust Badges */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="d-flex flex-wrap gap-3 gap-lg-5 justify-content-center">
                <div className="trust-badge">
                  <i className="bi bi-shield-check"></i>
                  <span>Secure Checkout</span>
                </div>
                <div className="trust-badge">
                  <i className="bi bi-lightning-charge-fill"></i>
                  <span>Instant Delivery</span>
                </div>
                <div className="trust-badge">
                  <i className="bi bi-headset"></i>
                  <span>24/7 Support</span>
                </div>
                <div className="trust-badge">
                  <i className="bi bi-star-fill"></i>
                  <span>100K+ Happy Gamers</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Brand Info */}
            <div className="col-lg-4 col-md-6 mb-4">
              <h5 className="brand-title mb-3">
                <img src={logo} style={{ width: "25px" }} className="me-2" alt="logo" />
                <span style={{ color: "#BD9B52" }}>LK Gaming Solutions</span>
              </h5>
              <p>
                Your ultimate destination for instant game keys and digital downloads. Get the best deals on PlayStation, Xbox and PC games.
              </p>
              <div className="d-flex gap-2 mt-4">
                <a href="#" className="social-icon" aria-label="Discord">
                  <i className="bi bi-discord"></i>
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#" className="social-icon" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="social-icon" aria-label="Reddit">
                  <i className="bi bi-reddit"></i>
                </a>
                <a href="#" className="social-icon" aria-label="YouTube">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>

            {/* Game Categories */}
            <div className="col-lg-3 mb-4">
              <h6 className="section-title mb-3">Games</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="footer-link small d-flex align-items-center">
                    <i className="bi bi-playstation me-2"></i>PlayStation
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="footer-link small d-flex align-items-center">
                    <i className="bi bi-xbox me-2"></i>Xbox
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="footer-link small d-flex align-items-center">
                    <i className="bi bi-controller me-2"></i>PC Games
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="col-lg-3 mb-4">
              <h6 className="section-title mb-3">Support</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="footer-link small">How It Works</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="footer-link small">FAQ</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="footer-link small">Redeem Code</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="footer-link small">Contact Us</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="footer-link small">Report Issue</a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-lg-2 mb-4">
              <h6 className="section-title mb-3">Stay Updated</h6>
              <p className="mb-3">
                Get exclusive deals & new game alerts!
              </p>
              <form>
                <input
                  type="email"
                  className="form-control form-control-sm newsletter-input mb-2"
                  placeholder="your@email.com"
                  aria-label="Email"
                />
                <button type="submit" className="btn btn-primary btn-sm w-100">
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="row mt-4 pt-4 border-top" style={{borderColor: '#2a313d !important'}}>
            <div className="col-12 mb-3">
              <h6 className="mb-3" style={{fontWeight: 600}}>
                SECURE PAYMENT METHODS
              </h6>
              <div className="d-flex flex-wrap gap-2">
                <div className="payment-icon">VISA</div>
                <div className="payment-icon">MC</div>
                <div className="payment-icon">AMEX</div>
                <div className="payment-icon">
                  <i className="bi bi-paypal"></i>
                </div>
                <div className="payment-icon">BTC</div>
                <div className="payment-icon">ETH</div>
                <div className="payment-icon">
                  <i className="bi bi-stripe"></i>
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