import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="contact container mt-100 mx-5">
        <div className="contact-info">
          <div className="first-info">
            <Link to="/" className="text-2xl font-bold">
              JobBoard
            </Link>
            <p>
              JobBox is the heart of the design community and the best resource
              to discover and connect with designers and jobs worldwide.
            </p>
            <div className="social-icon">
              <a href="#">
                <i className="bx bxl-facebook" />
              </a>
              <a href="#">
                <i className="bx bxl-twitter" />
              </a>
              <a href="#">
                <i className="bx bxl-instagram" />
              </a>
              <a href="#">
                <i className="bx bxl-youtube" />
              </a>
              <a href="#">
                <i className="bx bxl-linkedin" />
              </a>
            </div>
          </div>
          <div className="row footer-second-info">
            <div className="second-info col-auto">
              <h4>Resources</h4>
              <p>Contact us</p>
              <p>About page</p>
              <p>Products</p>
              <p>Contact</p>
            </div>
            <div className="third-info col-auto">
              <h4>Community</h4>
              <p>Feature</p>
              <p>Pricing</p>
              <p>Credit</p>
              <p>FAQ</p>
            </div>
            <div className="fourth-info col-auto">
              <h4>Quick links</h4>
              <p>iOS</p>
              <p>Android</p>
              <p>Desktop</p>
              <p>Microsoft</p>
            </div>
            <div className="five col-auto">
              <h4>More</h4>
              <p>Privacy</p>
              <p>Help</p>
              <p>Terms</p>
            </div>
          </div>
        </div>
        <div className="end-text mt-5 mb-3">
          <p>Copyright @2023.JobBox all right reserved.</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
