import React from 'react';
import PropTypes from 'prop-types';

export default class ContactDetails extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isEdit : false,
      name: '',
      phone: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  // handleChange가 있어야 input 박스에 value를 변경할 수 있음.
  handleChange(e){
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    nextState[e.target.phone] = e.target.phone;
    this.setState(nextState);
  }

  handleToggle(){
    if(!this.state.isEdit){
      this.setState({
        name: this.props.contact.name,
        phone: this.props.contact.phone
      });
    } else {
      this.handleEdit();
    }

    this.setState({
      isEdit: !this.state.isEdit,
    });

    // 처음에 toggle 할 때는 setState가 비동기이므로, setState가 끝나기 전에 console.log가 실행되서 false로 찍힘
    console.log(this.state.isEdit);
  }

  handleEdit(){
    this.props.onEdit(this.state.name, this.state.phone);
  }

  render(){
    const details = (
      <div>
        <p>{this.props.contact.name}</p>
        <p>{this.props.contact.phone}</p>
      </div>
    );
    const blank = (<div>Not Selected</div>);
    const edit = (
      <div>
        <p>
          <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange}/>
        </p>
        <p>
          <input type="text" name="phone" placeholder="phone" value={this.state.phone} onChange={this.handleChange}/>
        </p>
      </div>
    )
    const view = this.state.isEdit? edit : details;

    return(

      <div>
        <h2>Details</h2>
        {this.props.isSelected ? view : blank}
        <p>
          <button onClick={this.handleToggle}>
            {this.state.isEdit ? 'OK' : 'Edit'}
          </button>
          <button onClick={this.props.onRemove}>Remove</button>
        </p>
      </div>
    )
  }
}

ContactDetails.defaultProps = {
  contact:{
    name: '',
    phone : ''
  },
  onRemove: () => { console.error('onRemove not defined') } ,
  onEdit: () => { console.error('OnEdit not defined') }
}

ContactDetails.propTypes = {
  contact: PropTypes.object,
  onRemove: PropTypes.func,
  onEdit: PropTypes.func
}
