import React from 'react';

class NewTriggerButton extends React.Component {

  handleClick = (ev) => {
    console.log("new trigger button clicked")
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Create a new trigger yayyyyy</button>
      </div>
    )
  }
}

export default NewTriggerButton;
