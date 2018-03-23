// 스마트 컴포넌트 Control.js와 Value.js를 여기서 불러서 렌더링 함
import React, { Component } from 'react';

import Control from './Control';
import Value from './Value';
import { connect } from 'react-redux';
// import { connect, bindActionCreators } from 'react-redux';

import * as actions from '../actions';

// Value 컴포넌트와 Control 컴포넌트를 안에 담고 있을 부모 컴포넌트 (똑똑한 컴포넌트)
// connect(mapStateToProps, mapDispatchToProps)(Counter)를 사용했으므로
// 이제 ReactDOM으로 페이지를 렌더링 할 때 {this.props.number}와 같이 사용할 수 있다.
class Counter extends Component {
    constructor(props) {
        super(props);

        // this를 사용하므로 setRandomColor 메소드 바인딩
        this.setRandomColor = this.setRandomColor.bind(this);
    }

    setRandomColor(){
      const color = [
        Math.floor( (Math.random()*55)+200 ),
        Math.floor( (Math.random()*55)+200 ),
        Math.floor( (Math.random()*55)+200 )
      ]
      this.props.handleSetColor(color);
    }

    render() {
      const color = this.props.color;
      const style = {
        background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
      }


      return(
        <div style={style}>
            { /* connect()를 사용하지 않았다면 {this.props.store.getState().counter.number} 로 썼어야함  */}
            <Value number={this.props.number}/>
            <Control
              onPlus={this.props.handleIncrement}
              onSubtract={this.props.handleDecrement}
              onRandomizeColor={this.setRandomColor}/>
        </div>
      );
    }
}

// 함수 작성 redux의 state 안에 있는 걸 이 컴포넌트의 props로 매핑해 줌. 어떤 props가 state의 어떤 값으로 매핑 될지 정함
const mapStateToProps = (state) => {
  return {
    number: state.counter.number,
    color: state.ui.color
  }
}

const mapDispatchToProps = (dispatch) => {

  // 1. bindActionCreators 사용방법.
  // return bindActionCreators(actions, dispatch);

  return {
    handleIncrement: () => { dispatch(actions.increment()) },
    handleDecrement: () => { dispatch(actions.decrement()) },
    handleSetColor: (color) => { dispatch(actions.setColor(color)) }
  }
}

// connect를 이용하여 Counter 컴포넌트를 redux로 연결
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
