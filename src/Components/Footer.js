import Logo from "../Images/Logo.png";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="contact-wrapper">
        <img src={Logo} alt="" />
        <p> (012) 8967453</p>
        <a href="mailto:woodies@gmail.com">woodies@gmail.com</a>
        <p>Jakarta, Indonesia</p>
      </div>
      <p> &copy; 2020 WOODIES</p>
    </footer>
  );
};

export default Footer;
