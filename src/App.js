import React from 'react';
import './App.css';
import {connect} from 'react-redux'

import {fetchInit} from './actions/fetchInit.js'


class App extends React.Component {

  componentDidMount() {
    this.props.initializeStore({id: 1})
  }

  render() {
    return (
      <div className="App">
        Hello from App
        <p>{this.props.user.first_name}</p>
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log(`state in App: `, state)
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
