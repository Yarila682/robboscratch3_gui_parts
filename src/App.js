import React, { Component } from 'react';
import { connect } from 'react-redux';
import SensorPallete from './SensorPallete';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import RobboGui from './RobboGui';


class App extends Component {


  render() {
//  console.log(this.props.tracks);
  return (

          <RobboGui/>
  );
}

}

// const mapStateToProps =  state => ({
//
//       sensors: state.sensors
//   });
//
// const mapDispatchToProps = dispatch => ({
//
//
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);

export default  DragDropContext(HTML5Backend)(App);
