import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import ScrollToTop from "hooks/ScrollToTop"

import HeaderBar from "components/HeaderBar"
import Header from "components/Header"
import Footer from "components/Footer"
import FooterBar from "components/FooterBar"

import Dashboard from "pages/Dashboard"
import Order from "pages/Order"
import SizeQuantity from "pages/SizeQuantity"
import UploadSticker from "pages/UploadSticker"
import Cart from "pages/Cart"
import Checkout from "pages/Checkout"
import OrderSuccess from "pages/OrderSuccess"
import NotFound from "pages/404Page"
import FAQ from "pages/Faq"
import Help from "pages/Help"
import Status from "pages/Status"
import TermsOfService from "pages/TermsOfService"
import PrivacyPolicy from "pages/PrivacyPolicy"
import RefundPolicy from "pages/RefundPolicy"

import ROUTERS from "constants/Routers"

// import RouterTracker, { initGa } from "configuration/GoogleAnalytics"

const AppRouter = () => {
  return (
    <div>
      <Router>
        {/* {initGa() && <RouterTracker />} */}
        <ScrollToTop>
          <>
            <HeaderBar />
            <Header />
          </>
          <Switch>
            <Route exact path={ROUTERS.HOME} component={Dashboard} />
            <Route path={ROUTERS.CUSTOM_STICKER} component={Order} />
            <Route
              path={ROUTERS.CHOOSE_SIZE_QUANTITY}
              component={SizeQuantity}
            />
            <Route path={ROUTERS.UPLOAD_STICKER} component={UploadSticker} />
            <Route path={ROUTERS.CART} component={Cart} />
            <Route path={ROUTERS.CHECKOOUT} component={Checkout} />
            <Route path={ROUTERS.SUCCESS} component={OrderSuccess} />
            <Route path={ROUTERS.FAQ} component={FAQ} />
            <Route path={ROUTERS.HELP} component={Help} />
            <Route path={ROUTERS.STATUS} component={Status} />
            <Route path={ROUTERS.TERMSOFSERVICE} component={TermsOfService} />
            <Route path={ROUTERS.PRIVACYPOLICY} component={PrivacyPolicy} />
            <Route path={ROUTERS.REFUNDPOLICY} component={RefundPolicy} />
            <Route render={() => <NotFound />} />
          </Switch>
          <>
            <Footer />
            <FooterBar />
          </>
        </ScrollToTop>
      </Router>
    </div>
  )
}

export default AppRouter
