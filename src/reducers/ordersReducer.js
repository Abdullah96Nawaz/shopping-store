import {
    ORDER_FETCHED
  } from '../actions/orders'
  
  const order = (state = [], action) => {
    switch (action.type) {
      case ORDER_FETCHED:
        return action.payload
      default:
        return state
    }
  }
  
  export default order