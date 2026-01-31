import "./footer.css";
import FinPilotLogo from "../../assets/Images/FinPilotLogo.png";

const Footer = () => {
  return (
    <footer className="finpilot-footer finpilot-footer-section">
      <div className="container">
        {/* Top CTA Section (hidden on mobile via CSS) */}
        <div className="finpilot-footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="finpilot-footer-single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="finpilot-footer-cta-text">
                  <h4>Find us</h4>
                  <span>FinPilot HQ, Chandigarh, India</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="finpilot-footer-single-cta">
                <i className="fas fa-phone"></i>
                <div className="finpilot-footer-cta-text">
                  <h4>Call us</h4>
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="finpilot-footer-single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="finpilot-footer-cta-text">
                  <h4>Mail us</h4>
                  <span>support@finpilot.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="finpilot-footer-content pt-5 pb-5">
          <div className="row">
            {/* About Section */}
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="finpilot-footer-widget">
                <div className="finpilot-footer-logo">
                  <a href="/"><img src={FinPilotLogo} alt="FinPilot Logo" className="img-fluid" /></a>
                </div>
                <div className="finpilot-footer-text">
                  <p>
                    FinPilot helps you track, visualize, and predict your expenses with ease.
                    Smart finance management for individuals and businesses.
                  </p>
                </div>
                <div className="finpilot-footer-social-icon">
                  <span>Follow us</span>
                  <a href="https://facebook.com/finpilot"><i className="fab fa-facebook-f finpilot-facebook-bg"></i></a>
                  <a href="https://twitter.com/finpilot"><i className="fab fa-twitter finpilot-twitter-bg"></i></a>
                  <a href="https://linkedin.com/company/finpilot"><i className="fab fa-linkedin-in finpilot-google-bg"></i></a>
                </div>
              </div>
            </div>

            {/* Useful Links (hidden on mobile via CSS) */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30 hide-mobile">
              <div className="finpilot-footer-widget">
                <div className="finpilot-footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li><a href="/dashboard">Dashboard</a></li>
                  <li><a href="/reports">Reports</a></li>
                  <li><a href="/settings">Settings</a></li>
                  <li><a href="/help">Help & FAQ</a></li>
                  <li><a href="/contact">Contact</a></li>
                  <li><a href="/privacy">Privacy Policy</a></li>
                  <li><a href="/terms">Terms of Service</a></li>
                </ul>
              </div>
            </div>

            {/* Subscribe Section */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="finpilot-footer-widget">
                <div className="finpilot-footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="finpilot-footer-text mb-25">
                  <p>Stay updated with FinPilot news and features. Subscribe to our newsletter.</p>
                </div>
                <div className="finpilot-subscribe-form">
                  <form>
                    <input type="email" placeholder="Email Address" />
                    <button type="submit"><i className="fab fa-telegram-plane"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="finpilot-footer-copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="finpilot-footer-copyright-text">
                <p>© {new Date().getFullYear()} FinPilot. All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="finpilot-footer-menu">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/terms">Terms</a></li>
                  <li><a href="/privacy">Privacy</a></li>
                  <li><a href="/policy">Policy</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
