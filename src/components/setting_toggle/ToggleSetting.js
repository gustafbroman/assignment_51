import React from 'react';
import './ToggleSetting.scss';

class ToggleSetting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      on: false,
    }
  }

  toggle = () => {
    const previous = this.state.on;
    this.setState({
      on: !previous,
    });
  }

  render() {
    return (
        <div className={this.state.on ? "li toggle toggled" : "li toggle"} onClick={this.props.customClickEvent}>
          <div className="container">
            <p>{this.props.title}</p>
            <span class="material-icons" onClick={this.toggle}>
            {this.state.on ? "toggle_on" : "toggle_off"}
            </span>
          </div>
        </div>
    );
  }
}

export default ToggleSetting;