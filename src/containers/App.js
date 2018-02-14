import React from 'react';
import {connect} from 'react-redux'

import '../styles/App.css';
import {fetchInit} from '../actions/fetchInit.js'


class App extends React.Component {

  componentDidMount() {
    // This needs to be modified to allow users to log in
    // current default user is id: 1
    this.props.initializeStore({id: 1})
  }

  render() {
    return (
      <div className="App">
        Hello from App
        <p>{this.props.user.firstName}</p>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    initializeStore: (userObj) => {
      dispatch(fetchInit(userObj))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
