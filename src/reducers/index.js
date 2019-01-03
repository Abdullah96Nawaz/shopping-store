import { combineReducers } from 'redux';
import data from './reducers_info';
import cart from './cartReducer';
import user from './loginSupReducer';
const rootReducer = combineReducers({
  data:data,
  cart:cart,
  user:user
});

export default rootReducer;