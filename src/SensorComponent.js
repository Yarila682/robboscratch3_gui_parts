import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewVersionSensorComponent from './NewVersionSensorComponent';
import OldVersionSensorComponent from './OldVersionSensorComponent';
import './SensorComponent.css'



class SensorComponent extends Component {


  render() {

    return (
            <div  className="sensor" id={`sensor-${this.props.sensorId}`}>

          {

             this.props.isSensorVersionNew
              ?<NewVersionSensorComponent sensorId={this.props.sensorId} />

              :<OldVersionSensorComponent   sensorId={this.props.sensorId}/>




            }


              </div>

            );





    };




  }





export default SensorComponent;
