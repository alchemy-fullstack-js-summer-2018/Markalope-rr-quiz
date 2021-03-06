import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Color from './Color';
import AddColor from './AddColor';
import { getColors, getSelectedColor } from './reducers';
import { loadColors, addColor, selectColor } from './actions';

class ColorChooser extends Component {

  static propTypes = {
    colors: PropTypes.array,
    selectedColor: PropTypes.string,
    addColor: PropTypes.func,
    loadColors: PropTypes.func,
    onSelect: PropTypes.func,
    selectColor: PropTypes.func
  };

  componentDidMount() {
    this.props.loadColors(['red', 'blue', 'green']);
  }

  handleSelect = () => {
    this.props.selectColor(this.props.selectedColor);
  };

  
  render() { 
    const { colors, addColor } = this.props;
    return ( 
      <Fragment>
        <h1>This is Color Chooser</h1>

        <ul>
          {colors.map(color => {
            return <Color key={color} color={color} selectColor={selectColor} onSelect={this.handleSelect} />;
          })}
        </ul>

        <AddColor addColor={addColor}/>

      </Fragment>

    );
  }
}
 
export default connect(
  state => ({
    colors: getColors(state),
    selectedColor: getSelectedColor(state)
  }),
  { loadColors, selectColor, addColor }
)(ColorChooser);