import React from "react";
import "./Footer.css";

const downloadImage =
  "https://www.hindustantimes.com/static-content/1y/2021/footer-icons/mweb_button_svg.svg";

const partner1 =
  "https://www.hindustantimes.com/static-content/1y/2021/footer-icons/mint-logo.svg";
const partner2 =
  "https://www.hindustantimes.com/static-content/1y/2021/footer-icons/HH-logo.svg";
const partner3 =
  "https://www.hindustantimes.com/static-content/1y/2021/footer-icons/ht-marathi.png";
const partner4 =
  "https://www.hindustantimes.com/static-content/1y/2021/footer-icons/ht-tamil.png";
const partner5 =
  "https://www.hindustantimes.com/static-content/1y/2021/footer-icons/ht-marathi.png";
const partner6 =
  "https://www.hindustantimes.com/static-content/1y/2021/footer-icons/ht-tech.svg";

const Footer = () => {
  return (
    <footer className="app__footer font-head flex__center-column">
      <div className="footer-head flex__center">
        <h1>NewsApp</h1>
        <img src={downloadImage} alt="downloadApp" />
      </div>

      <div className="newsletter flex__center">
        <h2>Subscribe to our Newsletter</h2>
        <div>
          <input type="email" className="footer-input" />
          <button className="footer-button pointer">Submit</button>
        </div>
      </div>

      <div className="footer-mid flex__center mt-1">
        <h5>About Us</h5>
        <h5>Contact Us</h5>
        <h5>Terms Of Use</h5>
        <h5>Privacy Policy</h5>
        <h5>Disclaimer</h5>
        <h5>Subscription</h5>
      </div>
      <div className="footer-low flex__center mt-1">
        <img src={partner1} alt="partnerImages" />
        <img src={partner2} alt="partnerImages" />
        <img src={partner3} alt="partnerImages" />
        <img src={partner4} alt="partnerImages" />
        <img src={partner5} alt="partnerImages" />
        <img src={partner6} alt="partnerImages" />
      </div>
    </footer>
  );
};

export default Footer;
