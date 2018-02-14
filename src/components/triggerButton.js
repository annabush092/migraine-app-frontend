import React from 'react';

class TriggerButton extends React.Component {

  handleClick = () => {
    console.log(this.props.name, " button clicked")
  }

  render() {
    console.log("Inside trigger button: ", this.props)
    return (
      <div>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    )
  }
}

export default TriggerButton;
