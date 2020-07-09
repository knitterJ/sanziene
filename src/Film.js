import React, {  } from 'react';

class Film extends React.Component {

  render() {
    return (
      <div>
        <p>{this.props.info.title}</p>
      </div>
    );
  }
}

export default Film;

