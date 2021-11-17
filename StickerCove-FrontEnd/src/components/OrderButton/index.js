import { useHistory } from "react-router"
import "./style.scss"

import ROUTERS from "constants/Routers"
import MainProcessSteps from "components/Dashboard/MainProcessSteps"

const OrderButton = (props) => {
  const history = useHistory()

  const onClickHandler = () => {
    history.push(ROUTERS.CUSTOM_STICKER)
  }

  return (
    <div className="order-button" onClick={onClickHandler}>
      {props.title}
    </div>
  )
}

export default OrderButton
