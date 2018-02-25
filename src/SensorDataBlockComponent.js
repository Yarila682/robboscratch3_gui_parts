import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommonFieldsSensorComponent from './CommonFieldsSensorComponent';
import './SensorComponent.css'



class SensorDataBlockComponent extends Component {




  render() {

  //  let sensorPictureUrl = `/assets/16/sensor_${this.props.sensors[this.props.sensorId].sensor_name}.png`;

    return (
            <div  className="sensor" id={`${this.props.deviceName}_sensor-data-block-${this.props.sensorId}_type-${this.props.sensorType}`} >

          {




                  <CommonFieldsSensorComponent NameFieldText={`${this.props.sensorFieldText}`} sensorId={this.props.sensorId} />





            }


              </div>

            );





    };




  }





  // const mapStateToProps =  state => ({
  //
  //       sensors: state.sensors,
  //
  //   });
  //
  // const mapDispatchToProps = dispatch => ({
  //
  //
  // });

  export default SensorDataBlockComponent;
