import { combineReducers } from 'redux';
import userReducer from './firestore/user/user.reducers';
import customerrReducer from './firestore/customer/customer.reducers';

const allReducers = combineReducers({
  user: userReducer,
  cust: customerrReducer,
});

export default allReducers