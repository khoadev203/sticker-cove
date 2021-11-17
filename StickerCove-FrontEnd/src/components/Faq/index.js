import FaqItem from "components/FaqItem"
import "./style.scss"

import { FaqList } from "constants/FAQ"

const generateFaqList = () =>
  FaqList.map((item, index) => (
    <FaqItem key={index} question={item.question} answer={item.answer} />
  ))

const FAQ = () => (
  <div className="faq flex flex-column">
    FAQ
    {generateFaqList()}
  </div>
)

export default FAQ
