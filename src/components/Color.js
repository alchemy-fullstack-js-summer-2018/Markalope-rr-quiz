import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Color extends Component {
  
  static propTypes = {
    selectColor: PropTypes.func,
    color: PropTypes.string
  };

handleClick = () => {
  const { color, selectColor } = this.props;
  selectColor(color);
};



render() { 

  const { color } = this.props;

  return ( 
    <li>
      <span onClick={this.handleClick}>{color}</span>
    </li>
  );
}
}
 
export default Color;