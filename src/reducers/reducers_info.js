import {
    DATA_FETCHED
  } from '../actions/actionsData'
  
  const data = (state = [], action) => {
    switch (action.type) {
      case DATA_FETCHED:
        return action.payload
      default:
        return state
    }
  }
  
  export default data
  