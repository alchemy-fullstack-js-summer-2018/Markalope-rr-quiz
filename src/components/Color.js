import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Color extends Component {
  
  static propTypes = {
    selectColor: PropTypes.func,
    colorList: PropTypes.string
  };

handleClick = () => {
  const { colorList, selectColor } = this.props;
  selectColor(colorList);
};



render() { 

  const { colorList } = this.props;

  return ( 
    <li>
      <span onCLick={this.handleClick}>{colorList}</span>
    </li>
  );
}
}
 
export default Color;