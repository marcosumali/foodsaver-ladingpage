import { combineReducers } from 'redux';
import userReducer from './firestore/user/user.reducers';
import customerReducer from './firestore/customer/customer.reducers';
import avengerReducer from './firestore/avenger/avenger.reducers';

const allReducers = combineReducers({
  user: userReducer,
  cust: customerReducer,
  avg: avengerReducer,
});

export default allReducers