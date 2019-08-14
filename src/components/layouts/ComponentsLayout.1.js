import React, { Component } from 'react';
import { Input, TextArea, InputValidate, InputEmail, InputNumber, Button, Drawer, message2 } from '../../r-component/index';
import { isEmail } from '../../utils/common';
import Message from '../message2';
import renderWith3s from '../message2';


export default class ComponentsLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messageRequire: ''
    }
  }
  setMessage = (element, key, message = ' Điền vào nè !') => {
    if (!element.value.trim()) {
      this.setState({
        [key]: message
      })
    } else {
      this.setState({
        [key]: null
      })
    }
  }

  setMessageNumber = (element, key, message = ' Yêu cầu là con số !') => {
    if (isNaN(element.value.trim())) {
      this.setState({
        [key]: message
      })
    } else {
      this.setState({
        [key]: null
      })
    }
  }

  setMessageEmail = (element, key, message = ' Yêu câu email') => {
    if (!isEmail(element.value.trim())) {
      this.setState({
        [key]: message
      })
    } else {
      this.setState({
        [key]: null
      })
    }
  }

  checkInvalid = () => {
    this.setMessage(this.stringValidate, 'messageRequire');
  }

  checkInvalid1 = () => {
    this.setMessage(this.stringValidate1, 'stringValidate1');
  }

  checkInvalidInputNumber = (element) => {
    if (!element || !element.value.trim()) {
      this.setMessage(this.numberValue, 'messageNumberRequire');
    } else {

      if (isNaN(element.value.trim())) {
        this.setMessageNumber(this.numberValue, 'messageNumberRequire', 'mes number');

      } else {
        this.setMessage(this.numberValue, 'messageNumberRequire');
      }
    }
  }

  checkInvalidInputEmail = (element) => {
    if (!element || !element.value.trim()) {
      this.setMessage(this.emailValue, 'messageEmailRequire');
    } else {
      if (!isEmail(element.value.trim())) {
        this.setMessageEmail(this.emailValue, 'messageEmailRequire', 'Email dau');
      }
      else {
        this.setMessageEmail(this.emailValue, 'messageEmailRequire');
      }
    }
  }

  checkAll = () => {
    this.checkInvalid()
    this.checkInvalid1()
    this.checkInvalidInputNumber()
    this.checkInvalidInputEmail()
  }

  handleShowMessage = () => {
    this.setState({ isShowMessage: !this.state.isShowMessage });
    setTimeout(() => {
      this.setState({ isShowMessage: false });
    }, 3000)
  }


  render() {
    return (
      <div className="container" id="container">
        <div className="mb-10">
          <Input ref={element => this.inputRef = element} onChange={() => console.log('value Input:', this.inputRef.value)} />
        </div>
        <div>
          <TextArea />
        </div>
        <div className="component__item text--center">
          <h3>Form validate</h3>
          <div>
            <label className="input__require">string</label>
            <InputValidate
              ref={e => this.stringValidate = e}
              onChange={this.checkInvalid}
              messageRequire={this.state.messageRequire}
            />
          </div>


          <div>
            <label className="input__require">string</label>
            <InputValidate
              ref={e => this.stringValidate1 = e}
              onChange={this.checkInvalid1}
              messageRequire={this.state.stringValidate1}
            />
          </div>
          <div>
            <label>number</label>
            <InputNumber
              ref={e => this.numberValue = e}
              onChange={() => this.checkInvalidInputNumber(this.numberValue)}
              messageNumberRequire={this.state.messageNumberRequire}
            />
          </div>
          <div>
            <label>email</label>
            <InputEmail
              ref={e => this.emailValue = e}
              onChange={() => this.checkInvalidInputEmail(this.emailValue)}
              messageEmailRequire={this.state.messageEmailRequire}
            />
          </div>
          <Button onClick={this.checkAll}>Check value</Button>
        </div>

        <Button onClick={() => this.setState({ isDrawer: !this.state.isDrawer })}>show drawer</Button>
        {
          <Drawer isDrawer={this.state.isDrawer} toggleDrawer={() => this.setState({ isDrawer: !this.state.isDrawer })}> content Drawer</Drawer>
        }
        <Button onClick={this.handleShowMessage}>show message</Button>
        <Button onClick={() => this.setState({
          isShow: true
        })}>afd</Button>
        {
          // this.state.isShowMessage && <h1>okkkkkkkk</h1>
          <CompontMessage
            isShow={this.state.isShow}
          />
        }
        {/* { this.state.isShowMessage && renderWith3s((<h1>ok</h1>))} */}
      </div>
    )
  }
}

class CompontMessage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: props.isShow
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isShow: true
      })
    }, 3000)
  }
  render() {
    console.log('this.state.isShow: ', this.state.isShow);
    if (this.state.isShow) {
      return (
        <h1>ok</h1>
      )
    }
    return null
  }
}