import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./SensorComponent.css"
import CommonFieldsSensorComponent from './CommonFieldsSensorComponent';


class OldVersionSensorComponent extends Component {


  render() {

      return  (




        <div>

            <CommonFieldsSensorComponent sensorId={this.props.sensorId} />

            <div className="sensor_block_field">

                <input type="checkbox" />

            </div>


        </div>








              );
}

}



export default OldVersionSensorComponent;
