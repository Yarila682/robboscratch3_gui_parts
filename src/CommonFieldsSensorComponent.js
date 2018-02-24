import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./SensorComponent.css"


class CommonFieldsSensorComponent extends Component {

  //Sensors from extension pack


  render() {

      return  (

        <div className="sensor_block_field" >
            <div className="sensor_block_field">

                  {`sensor ${this.props.sensorId+1} : `}

            </div>
            <div className="sensor_block_field">

                  {"--"}

            </div>
        </div>
                );
}

}



export default CommonFieldsSensorComponent;
