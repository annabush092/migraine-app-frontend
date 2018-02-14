import React from 'react';
import {connect} from 'react-redux';

import TriggerButton from './triggerButton.js';
import NewTriggerButton from './newTriggerButton.js';

class TriggerContainer extends React.Component {

  renderTriggers = () => {
    if(Object.keys(this.props.triggers).length > 0) {
      const trigArr = []
      for(const key in this.props.triggers) {
        trigArr.push(<TriggerButton key={key} {...this.props.triggers[key]}/>)
      }
      return trigArr
    }
  }

  render() {
    return (
      <div>
        Hello from TriggerContainer
        {this.renderTriggers()}
        <NewTriggerButton/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    triggers: state.triggers
  }
}

export default connect(mapStateToProps)(TriggerContainer);
