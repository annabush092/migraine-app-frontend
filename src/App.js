import React from 'react';
import './App.css';
import {connect} from 'react-redux'

class App extends React.Component {
  render() {
    console.log(`hi ${this.props.user.first_name}`)
    return (
      <div className="App">
        Hello from App
        <p>{this.props.user.first_name}</p>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);
