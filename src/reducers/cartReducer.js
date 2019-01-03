import {
    CART_FETCHED
  } from '../actions/actionsData'
  
  const cart = (state = [], action) => {
    switch (action.type) {
      case CART_FETCHED:
        return action.payload
      default:
        return state
    }
  }
  
  export default cart
  