import "./Footer.scss";
import Logo from "./../../assets/images/logo.svg";
import Email from "./../../assets/images/icon-email.svg";
import Location from "./../../assets/images/icon-location.svg";
import Phone from "./../../assets/images/icon-phone.svg";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={Logo} alt="Logo Fylo" className="footer__img" />
      <div className="list__container">
        <ul className="list">
          <li id="location">
            <img
              src={Location}
              className="list__img"
              alt="Location image"
              id="location__img"
            />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eriusmod tempor incididunt ut labore et dolore magna aliqua
          </li>
        </ul>
        <ul className="list">
          <li>
            <img src={Phone} className="list__img" alt="Phone image" />
            +1-543-123-4567
          </li>
          <li>
            <img src={Email} className="list__img" alt="Email image" />
            example@fylo.com
          </li>
        </ul>
        <ul className="list" id="list__right">
          <li>About Us</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Blog</li>
        </ul>
        <ul className="list">
          <li>Contact Us</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>
        <ul className="list" id="list__social">
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaInstagram />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
