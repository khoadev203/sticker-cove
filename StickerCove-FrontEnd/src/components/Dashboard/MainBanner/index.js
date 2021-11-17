import OrderButton from "components/OrderButton"
import "./style.scss"
import MAINBANNERSTICKER from "resources/images/main-banner-stickers.png"
import MAINBANNERTEXTBG from "resources/images/main-banner-textbg.png"

const MainBanner = () => (
  <div className="main-banner flex">
    <div className="main-banner-texts flex flex-column">
      <div className="main-banner-title flex">
        <div className="flex">
          Create custom <br /> stickers now!
        </div>
        <img src={MAINBANNERTEXTBG} alt="banner text bg" />
      </div>
      <div className="main-banner-comments">
        Order today and get free delivery within 5 days!
      </div>
      <div className="main-banner-order flex">
        <OrderButton title="ORDER NOW"/>
      </div>
    </div>
    <img src={MAINBANNERSTICKER} alt="main banner" />
  </div>
)

export default MainBanner
