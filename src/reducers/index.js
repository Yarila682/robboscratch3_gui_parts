import { combineReducers } from 'redux';

import sensors from './sensors';
import trash_reducer from './trash_reducer';
import sensors_choose_window from './sensors_choose_window';


export default combineReducers({
  sensors:sensors,
  trash_reducer:trash_reducer,
  sensors_choose_window:sensors_choose_window

});
