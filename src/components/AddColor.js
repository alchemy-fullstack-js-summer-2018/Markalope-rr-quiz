import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddColor extends Component {
  state = { 
    colorList: ''
  };

  static propTypes = {
    addColor: PropTypes.func,
    submit: PropTypes.func
  };

  render() { 
    const { colorList } = this.state;


    return ( 
      <form onSubmit={this.handleSubmit}>
        <input type='text' value ={colorList} name='color' onChange={this.handleChange}/>
        <button type='submit'>Add Color</button>
      </form>
    );
  }
}
 
export default AddColor;