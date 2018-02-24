import React, { Component } from 'react';
import { connect } from 'react-redux';
import  SensorChooseWindowComponentElement from './SensorChooseWindowComponentElement'
import './SensorChooseWindowComponent.css';




class SensorChooseWindowComponent extends Component {





  render() {

    let showing_state = this.props.isShowing? "window-show": "window-hide";
    var i = 0;

    return (

                <div className={`sensor-choose-window ${showing_state}`}>


                  <div className="sensor-choose-window-tittle">

                      Sensor type

                  </div>

                    {


                      (() => {

                        let elements = [];
                        let urls = ["nosensor","line","led","light","touch","proximity","ulrasonic","color"]

                      for (i = 0; i< 8; i++){

                         elements.push(<SensorChooseWindowComponentElement sensorPictureUrl={`/assets/sensor_${urls[i]}.png`} />);


                      }

                        return elements;

                      })()




                    }








                </div>



            );





    };




  }





export default SensorChooseWindowComponent;
