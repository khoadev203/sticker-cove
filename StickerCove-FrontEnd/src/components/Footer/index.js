import { Link } from "react-router-dom"
import OrderButton from "components/OrderButton"
import "./style.scss"

import { TESTIMORIAL } from "constants/DummyTexts"

import LOGO from "resources/images/logo/logo.png"
import FOOTER from "resources/images/main-footer.png"

const Footer = () => (
  <>
    <div className="main-footer-fill"></div>
    <div className="main-footer-getapp flex">
      <img src={FOOTER} alt="get order" />
      <div className="main-footer-getapp-content flex">
        <span>GET ORDER TODAY</span>
        <OrderButton title="ORDER NOW" />
      </div>
    </div>
    <div className="main-footer flex">
      <div className="main-footer-info">
        <img src={LOGO} alt="logo" />
        <br />
        <p>{TESTIMORIAL}</p>
      </div>
      <div className="main-footer-service flex flex-column">
        <span>HELPFUL LINKS</span>
        <Link to={"/terms-of-service"}>TERMS OF SERVICE</Link>
        <Link to={"/privacy-policy"}>PRIVACY POLICY</Link>
        <Link to={"/refund-policy"}>REFUND POLICY</Link>
        <Link to={"/help"}>CONTACT US</Link>
        <Link to={"/faq"}>FAQ</Link>
      </div>
      <div className="main-footer-information flex flex-column">
        <span>INFORMATION</span>
        <div>Looking for additional help? Contact StickerCove today.</div>
        <div className="main-footer-information-contacts">
          <div>
            Tel: <a href="tel:864-660-4023">+1 864-660-4023</a>
          </div>
          <div>
            Email:{" "}
            <a href="mailto:help@stickercove.com">help@stickercove.com</a>
          </div>
          <div className="flex">
            <div>Location:</div>
            <span>655H Fairview Rd. Ste 109 Simpsonville, SC</span>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Footer
