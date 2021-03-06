import { combineReducers } from 'redux';
import passwordRecovery from './passwordRecovery';
import product from './product';
import shop from './shop';
import signIn from './signIn';
import signUp from './signUp';
import user from './user';

export default combineReducers({
  passwordRecovery,
  product,
  shop,
  signIn,
  signUp,
  user,
});
