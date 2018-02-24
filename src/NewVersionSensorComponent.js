import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./SensorComponent.css";
import CommonFieldsSensorComponent from './CommonFieldsSensorComponent';


class NewVersionSensorComponent extends Component {

  //Sensors from extension pack


  render() {

      return  (

                    <div>

                        <CommonFieldsSensorComponent sensorId={this.props.sensorId} />

                        <div className="sensor_block_field">

                            <img src="" />

                        </div>


                    </div>

                );
}

}



export default NewVersionSensorComponent;
