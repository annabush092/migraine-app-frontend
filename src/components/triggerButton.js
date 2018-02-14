import React from 'react';

class TriggerButton extends React.Component {
  render() {
    console.log("Inside trigger button: ", this.props)
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}

export default TriggerButton;
