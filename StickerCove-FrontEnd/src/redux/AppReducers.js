import { combineReducers } from "redux"

import order from "redux/Reducers/Order"
import comment from "redux/Reducers/Comment"

const appReducers = combineReducers({
  order,
  comment,
})

export default appReducers
