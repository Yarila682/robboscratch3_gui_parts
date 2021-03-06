import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SensorPallete.css';
import SensorComponent from './SensorComponent';
import SensorDataBlockComponent  from './SensorDataBlockComponent'
import SensorChooseWindowComponent from './SensorChooseWindowComponent';


import {ActionTriggerExtensionPack} from './actions/sensor_actions'
import {ActionTriggerSensorChooseWindow} from './actions/sensor_actions'

class SensorPallete extends Component {


  triggerExtensionPack(){

      console.log("triggerExtensionPack()");
      this.props.onTriggerExtensionPack();

  }

  triggerSensorChooseWindow(){

      console.log("triggerSensorChooseWindow()");
      this.props.onTriggerSensorChooseWindow(0);

  }

  render() {
//  console.log(this.props.tracks);
  return (

      <div id="sensor-pallete">



          <div id="robot-sensors">

              <div id="robot-sensors-tittle" className="sensor-panel-tittle"> Robot   </div>

                <SensorDataBlockComponent key={this.props.robot_special_sensors[0].sensor_id} sensorId={this.props.robot_special_sensors[0].sensor_id}
                                   deviceName={this.props.robot_special_sensors[0].sensor_device_name} sensorType={this.props.robot_special_sensors[0].sensor_type}
                                   sensorFieldText={this.props.robot_special_sensors[0].sensor_field_text} />

                <SensorDataBlockComponent key={this.props.robot_special_sensors[1].sensor_id} sensorId={this.props.robot_special_sensors[1].sensor_id}
                                                      deviceName={this.props.robot_special_sensors[1].sensor_device_name} sensorType={this.props.robot_special_sensors[1].sensor_type}
                                                      sensorFieldText={this.props.robot_special_sensors[1].sensor_field_text} />

            {


                  this.props.robot_sensors.map((sensor, index) =>

                     {

                       let sensorPictureUrl = `/assets/16/${sensor.sensor_device_name}_sensor_${sensor.sensor_name}.png`;



                       return   <SensorComponent key={index} index={index} sensorId={sensor.sensor_id} isSensorVersionNew={sensor.is_sensor_version_new}
                                   sensorPictureUrl={sensorPictureUrl}
                                   deviceName={sensor.sensor_device_name} sensorType={sensor.sensor_type}
                                   sensorFieldText={sensor.sensor_field_text}/>



                     }

                 )




            }


            <SensorDataBlockComponent key={this.props.robot_special_sensors[2].sensor_id} sensorId={this.props.robot_special_sensors[2].sensor_id}
                               deviceName={this.props.robot_special_sensors[2].sensor_device_name} sensorType={this.props.robot_special_sensors[2].sensor_type}
                               sensorFieldText={this.props.robot_special_sensors[2].sensor_field_text} />

          </div>

          <div id = "laboratory-sensors">

            <div id="laboratory-sensors-tittle" className="sensor-panel-tittle">Laboratory   </div>

            {


              (() => {

                let components = [];


                                        this.props.lab_special_sensors.map((sensor, index) =>

                                                    {

                                                  components.push(<SensorDataBlockComponent key={sensor.sensor_id} sensorId={sensor.sensor_id}
                                                                      deviceName={sensor.sensor_device_name} sensorType={sensor.sensor_type}
                                                                      sensorFieldText={sensor.sensor_field_text} />


                                                                  );



                                                     }

                                                                              );


                                          this.props.lab_external_sensors.map((sensor, index) =>

                                             {



                                               let sensorPictureUrl = `/assets/16/${sensor.sensor_device_name}_sensor_${sensor.sensor_name}.png`;



                                               components.push(<SensorComponent key={index} index={index} sensorId={sensor.sensor_id} isSensorVersionNew={sensor.is_sensor_version_new}
                                                           sensorPictureUrl={sensorPictureUrl}
                                                           deviceName={sensor.sensor_device_name} sensorType={sensor.sensor_type}
                                                           sensorFieldText={sensor.sensor_field_text}/>);



                                             }

                                                                              )



                return (

                        components

                        );
                      }
              )()





            }


          </div>





            <button className="btn-trigger-extension-pack" onClick = {this.triggerExtensionPack.bind(this)}>Trigger extension pack   </button>

            <button className="btn-trigger-sensor-choose-window" onClick = {this.triggerSensorChooseWindow.bind(this)}>Trigger sensor choose window  </button>

      </div>
  );
}

}

const mapStateToProps =  state => ({

      robot_sensors: state.robot_sensors,
      lab_external_sensors:  state.lab_external_sensors,
      robot_special_sensors: state.robot_special_sensors,
      lab_special_sensors:  state.lab_special_sensors,
      sensors_choose_window: state.sensors_choose_window
  });

const mapDispatchToProps = dispatch => ({

  onTriggerExtensionPack: () => {

      dispatch(ActionTriggerExtensionPack());
    },

     onTriggerSensorChooseWindow: (sensor_caller_id) => {

         dispatch(ActionTriggerSensorChooseWindow(sensor_caller_id));
       },


});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SensorPallete);
