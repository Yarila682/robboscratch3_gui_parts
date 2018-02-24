

const initialState = {sensors_choose_window_showing:false};

const  reducer = function (state, action) {



  if (typeof state === 'undefined') state = initialState;


switch (action.type) {

  case 'TRIGGER_SENSOR_CHOOSE_WINDOW':


  let sensors_choose_window_state = {};

  sensors_choose_window_state = Object.assign({}, state);;

  sensors_choose_window_state.sensors_choose_window_showing = !sensors_choose_window_state.sensors_choose_window_showing;



  return sensors_choose_window_state;


    break;
  default:

      return state;

}




  return state;


}


export {
    reducer as default,

};
