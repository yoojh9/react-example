import React from 'react';
import PropTypes from 'prop-types';

export default class ContactCreate extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      phone: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }


  // handleChange가 있어야 input 박스에 value를 변경할 수 있음.
  handleChange(e){
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    nextState[e.target.phone] = e.target.phone;
    this.setState(nextState);
  }


  handleClick(){
    const contact = {
      name: this.state.name,
      phone: this.state.phone
    };
    this.props.onCreate(contact);
    this.setState({
      name: '',
      phone: ''
    });
    this.nameInput.focus(); // create 후 nameInput에 focus
  }

  // 마우스 클릭 없이 엔터키로 데이터 추가
  handleKeyPress(e){
    if(e.charCode===13){
      this.handleClick();
    }
  }


  render(){
    return(
      <div>
        <h2> Create Component </h2>
        <p>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
            ref= {(ref) => {this.nameInput = ref} }
          />
          <input
            type="text"
            name="phone"
            placeholder="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        </p>
        <button onClick={this.handleClick}>create</button>
      </div>
    )
  }
}

ContactCreate.propTypes = {
  onCreate: PropTypes.func
};

ContactCreate.defaultProps = {
  onCreate: () => {console.error('onCreate not defined') }
}
