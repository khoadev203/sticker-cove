import { useState, useEffect } from "react"
import { Link, useHistory, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import LOGO from "resources/images/logo/logo.png"
import "./style.scss"

import ROUTERS, { NAVBAR_ROUTERS } from "constants/Routers"
const Header = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState("")

  const history = useHistory()
  const { pathname } = useLocation()

  useEffect(() => {
    setActive(pathname)
  })

  const handleClickLogo = () => {
    history.push(ROUTERS.HOME)
  }

  const handleOrder = () => {
    setCollapsed(!collapsed)
    history.push(ROUTERS.CUSTOM_STICKER)
  }

  const handleCollapse = () => {
    setCollapsed(!collapsed)
  }

  const generateHeaderNav = () =>
    NAVBAR_ROUTERS.map((nav, index) => {
      return (
        <Link
          key={index}
          className={active === nav.path ? "navbar-active" : ""}
          to={nav.path}
          onClick={() => setCollapsed(false)}
        >
          {nav.title}
        </Link>
      )
    })

  return (
    <div className="header flex">
      <img src={LOGO} alt="logo" onClick={handleClickLogo} />
      <div className="header-nav  flex">
        <div className={`header-menus flex`}>{generateHeaderNav()}</div>
        <div className="header-order-now" onClick={handleOrder}>
          ORDER NOW
        </div>
        <div className="header-order-collapse">
          <FontAwesomeIcon icon={faBars} onClick={handleCollapse} />
          {collapsed && (
            <div className="header-order-collapse-menu flex flex-column">
              <div className="header-order-collapse-menu-close flex">
                <div>
                  <FontAwesomeIcon icon={faTimes} onClick={handleCollapse} />
                </div>
              </div>
              <div
                className="header-order-collapse-order-now"
                onClick={handleOrder}
              >
                ORDER NOW
              </div>
              {generateHeaderNav()}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
