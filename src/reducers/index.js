import { combineReducers } from 'redux';

import robot_sensors from './robot_sensors';
import lab_sensors from './lab_sensors';
import trash_reducer from './trash_reducer';
import sensors_choose_window from './sensors_choose_window';


export default combineReducers({

  robot_sensors:robot_sensors,
  lab_sensors:lab_sensors,
  trash_reducer:trash_reducer,
  sensors_choose_window:sensors_choose_window

});
