import { useState, useEffect } from "react"
import MainProcessSteps from "components/Dashboard/MainProcessSteps"
import OrderButton from "components/OrderButton"
import "./style.scss"

import ProcessSteps, { StepsOnMobile } from "constants/ProcessSteps"
import { faWindowClose } from "@fortawesome/free-solid-svg-icons"

const generateSteps = (width) => {
  if (width > 768) {
    return ProcessSteps.map((step, index) => (
      <MainProcessSteps
        key={index}
        image={step.image}
        title={step.title}
        comment={step.comment}
      />
    ))
  } else {
    return StepsOnMobile.map((step, index) => (
      <MainProcessSteps
        key={index}
        image={step.image}
        title={step.title}
        comment={step.comment}
      />
    ))
  }
}

const MainProcess = () => {
  const [width, setWidth] = useState(0)

  const updateSize = () => {
    setWidth(window.innerWidth)
  }

  window.addEventListener("resize", updateSize)

  useEffect(() => {
    updateSize()
  }, [width])

  return (
    <div className="main-process flex flex-column">
      <p>How we do things</p>
      <div className="main-process-step flex">{generateSteps(width)}</div>
      <div className="main-process-order flex">
        <OrderButton title="ORDER TODAY" />
      </div>
    </div>
  )
}

export default MainProcess
