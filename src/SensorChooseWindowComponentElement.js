import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import './SensorChooseWindowComponentElement.css';
import {ActionTriggerSensorName} from './actions/sensor_actions'




class SensorChooseWindowComponentElement extends Component {


  ChooseSensorType(){

      console.log('ChooseSensorName()2');

      this.props.onSensorNameChoosen(ReactDOM.findDOMNode(this).id);

      ;

  }

  render() {



    return (

              <div className="sensor-choose-window-component-element" id={`${this.props.deviceName}-sensor-name-${this.props.sensorName}_CallerSensorId-${this.props.CallerSensorId}`} onClick = {this.ChooseSensorType.bind(this)} >


                  <img src = {`${this.props.sensorPictureUrl}`} />

              </div>

            );





    };




  }





  const mapStateToProps =  state => ({

        // sensors: state.sensors,
        // sensors_choose_window: state.sensors_choose_window
    });

  const mapDispatchToProps = dispatch => ({

    onSensorNameChoosen: (payload) => {

        dispatch(ActionTriggerSensorName(payload));
      }


  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SensorChooseWindowComponentElement);
