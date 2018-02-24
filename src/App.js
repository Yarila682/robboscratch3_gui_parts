import React, { Component } from 'react';
import { connect } from 'react-redux';
import SensorPallete from './SensorPallete';

class App extends Component {


  render() {
//  console.log(this.props.tracks);
  return (

          <SensorPallete/>
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

export default App;
