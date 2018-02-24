
import SensorsAPI from '../sensors_api'

function init_state(){

  let sensors = [];
  let sensors_count = 5;
  let i = 0;

  for (i=0;i<sensors_count;i++){

      sensors[i]= {

            sensor_id:i,
            sensor_name: SensorsAPI.getSensorInitName(),
            sensor_type:  SensorsAPI.getSensorInitType(),
            is_sensor_version_new: true,
            sensor_active: false,
            sensor_data:{value:"test"}

      }

  }


    return sensors;

}


const initialState = init_state();

const  reducer = function (state, action) {



  if (typeof state === 'undefined') state = initialState;


switch (action.type) {

  case 'TRIGGER_EXTENSION_PACK':


            let sensors = [];

            sensors = [...state];

            sensors = handler_trigger_extension_pack(sensors);



            return sensors;


    break;
  default:

      return state;

}




  return state;


}


const handler_trigger_extension_pack = function (initial_sensors_state){

    let sensors_state = initial_sensors_state;

    sensors_state.map((sensor, index) => {

        sensors_state[index].is_sensor_version_new = !sensors_state[index].is_sensor_version_new;


    });

  return sensors_state;
}


export {
    reducer as default,

};
