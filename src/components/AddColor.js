import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddColor extends Component {
  state = { 
    color: ''
  };

  static propTypes = {
    addColor: PropTypes.func,
    submit: PropTypes.func
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addColor(this.state.color);
  };
  
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };


  render() { 
    const { color } = this.state;


    return ( 
      <form onSubmit={this.handleSubmit}>
        <input type='text' value ={color} name='color' onChange={this.handleChange}/>
        <button type='submit'>Add Color</button>
      </form>
    );
  }
}
 
export default AddColor;