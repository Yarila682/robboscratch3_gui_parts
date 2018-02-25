import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./SensorComponent.css"


class CommonFieldsSensorComponent extends Component {

  //Sensors from extension pack


  render() {

      return  (

        <div className="sensor_block_field" >
            <div className="sensor_block_field">

                  {`${this.props.NameFieldText} `}

            </div>
            <div className="sensor_block_field">

                  {"--"}

            </div>
        </div>
                );
}

}



export default CommonFieldsSensorComponent;
