import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SensorPallete.css';
import SensorComponent from './SensorComponent';
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
      this.props.onTriggerSensorChooseWindow();

  }

  render() {
//  console.log(this.props.tracks);
  return (

      <div id="sensor-pallete">

          <div id="robot-sensors">
            {

             this.props.sensors.map((sensor, index) =>

                  {



                    return   <SensorComponent key={index} index={index} sensorId={sensor.sensor_id} isSensorVersionNew={sensor.is_sensor_version_new} />



                  }

              )



            }

          </div>

          <div id = "laboratory-sensors">
            {

             this.props.sensors.map((sensor, index) =>

                  {



                    return   <SensorComponent key={index} index={index} sensorId={sensor.sensor_id} isSensorVersionNew={sensor.is_sensor_version_new} />



                  }

              )



            }


          </div>


            <SensorChooseWindowComponent isShowing={this.props.sensors_choose_window.sensors_choose_window_showing}/>


            <button className="btn-trigger-extension-pack" onClick = {this.triggerExtensionPack.bind(this)}>Trigger extension pack   </button>

            <button className="btn-trigger-sensor-choose-window" onClick = {this.triggerSensorChooseWindow.bind(this)}>Trigger sensor choose window  </button>

      </div>
  );
}

}

const mapStateToProps =  state => ({

      sensors: state.sensors,
      sensors_choose_window: state.sensors_choose_window
  });

const mapDispatchToProps = dispatch => ({

  onTriggerExtensionPack: () => {

      dispatch(ActionTriggerExtensionPack());
    },

     onTriggerSensorChooseWindow: () => {

         dispatch(ActionTriggerSensorChooseWindow());
       },


});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SensorPallete);
