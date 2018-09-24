import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux';
import { getSelectedColor } from './reducers';

class RainbowLightBulb extends Component {
  state = {  
    on: true
  }

static propTypes = {
  selectedColor: PropTypes.string
}

handleClick = () => {
  this.setState(({ on }) => ({ on: false }));
};


render() { 

  const { on } = this.state;
  const { selectedColor } = this.props;


  return ( 

    <section>
      <h1>This is RainbowLighBulb</h1>
      <button onClick={this.handleClick}>
        {on ? 'ON' : 'OFF'}
      </button>

      {on && 
      <span style={{ color: selectedColor }}> <i className="far fa-lightbulb"></i></span>}
    </section>


  );
}
}
 
export default connect(
  state => ({
    selectedColor: getSelectedColor(state)
  })
)(RainbowLightBulb);