import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onPlus: PropTypes.func,
  onSubtract: PropTypes.func,
  onRandomizeColor: PropTypes.func,
};

function createWarning(funcName){
  return() => console.warn(funcName + " is not defined");
}

const defaultProps = {
  onPlus: createWarning('onPlus'),
  onSubtract: createWarning('onSubtract'),
  onRandomizeColor: createWarning('onRandomizeColor')
};

// 버튼 3개를 보여줄 컴포넌트 (멍청한 컴포넌트)
class Contol extends Component {
    // useless constructor
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return(
            <div>
              <button onClick={this.props.onPlus}>+</button>
              <button onClick={this.props.onSubtract}>-</button>
              <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
            </div>
        );
    }
}

Contol.propTypes = propTypes;
Contol.defaultProps = defaultProps;
export default Contol;
