import React from 'react';
import './Location.scss';

class Location_page extends React.Component {
  componentDidMount() {
    document.title = 'Location | Possio Alarm';
  }

  render() {
    return (
      <div className="location_page">
          <h1>Location page</h1>
      </div>
    );
  }
}

export default Location_page;