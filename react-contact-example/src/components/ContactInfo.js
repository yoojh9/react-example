import React from 'react';

// 맨 아래 export default ContactInfo 이것과 같은 방식
export default class ContactInfo extends React.Component {
    render() {
        return (
            <div onClick={this.props.onClick}> {this.props.contact.name} </div>
        );
    }
}
