import { combineReducers } from 'redux';
import data from './reducers_info';
import cart from './cartReducer';
import user from './loginSupReducer';
import order from './ordersReducer';
const rootReducer = combineReducers({
  data:data,
  cart:cart,
  user:user,
  order:order
});

export default rootReducer;