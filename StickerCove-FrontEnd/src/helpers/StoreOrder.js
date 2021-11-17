export const createOrder = (stickerType, value = null) => {
  const orderCount = localStorage.length
  const newId = (orderCount + 1).toString()

  const newOrder =
    value && value.toString().length ? value : { type: stickerType, id: newId }

  localStorage.setItem(newId, JSON.stringify(newOrder))

  return newId
}

export const getOrder = (id) => {
  const orderById = localStorage.getItem(id)

  if (orderById) {
    const order = JSON.parse(orderById)

    return order
  }

  return {}
}

export const updateOrder = (id, value) => {
  const orderById = localStorage.getItem(id)

  if (orderById) {
    const order = JSON.parse(orderById)
    const newOrder = Object.assign(order, value)

    localStorage.setItem(id, JSON.stringify(newOrder))

    return true
  }

  console.error("Order", id, "does not exist")
  return false
}

export const deleteOrder = (id) => {
  const orderById = localStorage.getItem(id)

  if (orderById) {
    localStorage.removeItem(id)
  }
}

export const getOrderList = () => {
  const orderCount = localStorage.length

  if (orderCount) {
    let orderList = []

    for (let i = 1; i <= orderCount; i++) {
      const order = JSON.parse(localStorage.getItem(i))

      if (order.price) {
        orderList.push(order)
      }
    }

    resetOrderList(orderList)

    return orderList
  }

  return []
}

export const resetOrderList = (newList) => {
  localStorage.clear()

  newList.forEach((order) => {
    createOrder(null, order)
  })
}
