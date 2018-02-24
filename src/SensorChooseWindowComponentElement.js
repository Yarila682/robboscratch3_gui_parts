import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SensorChooseWindowComponentElement.css';




class SensorChooseWindowComponentElement extends Component {


  render() {



    return (

              <div className="sensor-choose-window-component-element">


                  <img src = {`${this.props.sensorPictureUrl}`} />

              </div>

            );





    };




  }





export default SensorChooseWindowComponentElement;
