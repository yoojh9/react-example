import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';
import ContactCreate from './ContactCreate';
import update from 'react-addons-update';

export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          selectedKey: -1,
            keyword: '',
            contactData: [{
                name: 'Abet',
                phone: '010-0000-0001'
            }, {
                name: 'Betty',
                phone: '010-0000-0002'
            }, {
                name: 'Charlie',
                phone: '010-0000-0003'
            }, {
                name: 'David',
                phone: '010-0000-0004'
            }]
        };
        // handling events 바인딩
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.handleCreate = this.handleCreate.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }


    componentWillMount(){
      const contactData = localStorage.contactData;
      if(contactData){
        this.setState({
          contactData: JSON.parse(contactData)
        });
      }
    }

    // contact 데이터가 이전 값이랑 지금 값이랑 다르다면 localStorage에 지금 값을 저장
    componentDidUpdate(prevProps, prevState){
      if(JSON.stringify(prevState) != JSON.stringify(this.state.contactData)){
        localStorage.contactData = JSON.stringify(this.state.contactData);
      }
    }


    handleChange(e){
        this.setState({
          keyword: e.target.value
        });
    }


    handleClick(key){
      this.setState({
        selectedKey: key
      });
      console.log(key, 'is selected');
    }


    handleCreate(contact){
      this.setState({
        contactData: update(this.state.contactData, { $push: [contact] }) // 아이템 하나도 배열 형태로 전달
      });
    }


    handleRemove(){
      if(this.state.selectedKey < 0) return;

      this.setState({
        contactData: update(this.state.contactData,
          {
            $splice: [[this.state.selectedKey, 1]]
          }
        ),
        selectedKey: -1  // 무효화
      });
    }


    handleEdit(name, phone){
      this.setState({
        contactData: update(this.state.contactData,
          {
            [this.state.selectedKey] : {
              name: { $set: name },
              phone: { $set: phone }
            }
          }
        )
      });
    }


    render() {
        const mapToComponents = (data) => {
            data.sort();
            data = data.filter(
              (contact) => contact.name.toLowerCase().indexOf(this.state.keyword) > -1
            );
            return data.map((contact, i) => {
                return (<ContactInfo contact={contact}
                                     key={i}
                                     onClick={()=>{this.handleClick(i)}}/>)
            });
        };

        return (
            <div>
                <h1>Contacts</h1>
                <input
                  name="keyword"
                  placeholder="Search"
                  value={this.state.keyword}
                  onChange={this.handleChange}
                />
                <div>{mapToComponents(this.state.contactData)}</div>
                <ContactDetails
                  isSelected={this.state.selectedKey != -1}
                  contact={this.state.contactData[this.state.selectedKey]}
                  onRemove={this.handleRemove}
                  onEdit={this.handleEdit}>
                </ContactDetails>
                { /* onCreate 프로퍼티로 this.handleCreate 전달 */ }
                <ContactCreate onCreate={this.handleCreate}/>
            </div>
        );
    }
}
