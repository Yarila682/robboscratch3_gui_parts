import React, { Component } from 'react';
import { connect } from 'react-redux';
import  SensorChooseWindowComponentElement from './SensorChooseWindowComponentElement'
import './SensorChooseWindowComponent.css';

import PropTypes from 'prop-types';
import { ItemTypes } from './drag_constants';
import { DragSource } from 'react-dnd';

const SensorChooseWindowSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}




class SensorChooseWindowComponent extends Component {





  render() {

    const { connectDragSource, isDragging, isShowing,top,left,CallerSensorId,SensorCallerDeviceName,CallerSensorType } = this.props;

    let showing_state = isShowing? "window-show": "window-hide";
    let draggable_state = isDragging? "window-drag":"";
    var i = 0;



             return connectDragSource(

                <div  className={`sensor-choose-window ${showing_state} ${draggable_state}`}   style={{

                              position: 'absolute',
                              top: `${top}px`,
                              left: `${left}px`,
                              }}>


                  <div className="sensor-choose-window-tittle">

                      Sensor type

                  </div>

                    {


                      (() => {

                        let elements = [];
                        let sensor_names = (SensorCallerDeviceName == "robot")? ["nosensor","line","led","light","touch","proximity","ulrasonic","color"]:["nosensor","clamps","temperature"];

                      //  console.log("SensorCallerDeviceName: " + SensorCallerDeviceName + " CallerSensorType: " + CallerSensorType)

                        if ((SensorCallerDeviceName !== "robot") && (CallerSensorType == "DIGITAL")) {

                              sensor_names = sensor_names.filter(

                                  (element,index) => {

                                      console.log("element: " + element);
                                    //    return  (element !== "temperature")
                                  }

                              );

                        }

                           sensor_names.map((sensor_name, index) =>

                                {

                                  elements.push(<SensorChooseWindowComponentElement deviceName={`${SensorCallerDeviceName}`} sensorName={`${sensor_name}`} key={`SensorChooseWindowComponentElement-${index}`} sensorPictureUrl={`/assets/32/${SensorCallerDeviceName}_sensor_${sensor_name}.png`}
                                    CallerSensorId={CallerSensorId}/>);


                                });










                        return elements;

                      })()




                    }








                </div>

            );







    };




  }


  SensorChooseWindowComponent.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    isShowing: PropTypes.bool.isRequired,
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    CallerSensorId: PropTypes.number.isRequired,
    SensorCallerDeviceName: PropTypes.string.isRequired,
    CallerSensorType: PropTypes.string.isRequired

  };


export default DragSource(ItemTypes.SENSOR_CHOOSE_WINDOW, SensorChooseWindowSource, collect)(SensorChooseWindowComponent);
