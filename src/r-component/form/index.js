import React, { Component } from 'react';
import { Button, CheckBox, Form, InputValidate, InputNumber, InputEmail } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCopy } from '@fortawesome/free-solid-svg-icons';
import '../r-components.scss';
// import { isEmail } from '../../utils/common';

const isEmail = true

export default class RcForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false,
            isShowRegister: false
        }
    }
    onSubmit = () => {
        event.preventDefault();
        this.checkValidUserName()
        this.checkValidPassword()
        const username = this.username.value;
        const password = this.password.value;
        if (username && password) {
            this.props.getLogin({ username, password });
        }
    }
    onSubmit1 = () => {
        event.preventDefault();
        this.checkValidUserName1()
        this.checkValidPassword1()
        this.checkInvalidInputEmail()
        this.checkInvalidInputNumber()
        const username = this.username.value;
        const password = this.password.value;
        if (username && password) {
            this.props.getLogin({ username, password });
        }
    }

    setMessage = (element, key, message = 'Điền vào nè') => {
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

    checkValidUserName = () => {
        this.setMessage(this.username, 'requireUserName');
    }
    checkValidUserName1 = () => {
        this.setMessage(this.username1, 'requireUserName1');
    }

    checkValidPassword = () => {
        this.setMessage(this.password, 'requirePassword');
    }
    checkValidPassword1 = () => {
        this.setMessage(this.password1, 'requirePassword1');
    }

    checkInvalidInputNumber = (element) => {
        if (!element || !element.value.trim()) {
            this.setMessage(this.numberValue, 'messageNumberRequire');
        } else {

            if (isNaN(element.value.trim())) {
                this.setMessageNumber(this.numberValue, 'messageNumberRequire');

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
                this.setMessageEmail(this.emailValue, 'messageEmailRequire');
            }
            else {
                this.setMessageEmail(this.emailValue, 'messageEmailRequire');
            }
        }
    }
    render() {
        return (
            <React.Fragment>
                <h1 className="rc__label-title">Form types</h1>
                <div className="rc__box">
                    <div className="rc__box__content">
                        <div className="p-10">
                            <div className="rc__label mb-10">Login form:</div>
                            <div className="d-flex mb-20">
                                <Form
                                    onSubmit={this.onSubmit}
                                    className="rc__login-form"
                                >
                                    <div className="d-flex flex-column mb-20 ">
                                        <label>User name</label>
                                        <InputValidate
                                            name="username"
                                            ref={(element) => this.username = element}
                                            onChange={this.checkValidUserName}
                                            messageRequire={this.state.requireUserName}
                                        />
                                    </div>
                                    <div className="d-flex flex-column mb-20">
                                        <label>Password</label>
                                        <InputValidate
                                            type="password"
                                            name="password"
                                            ref={(element) => this.password = element}
                                            onChange={this.checkValidPassword}
                                            messageRequire={this.state.requirePassword}
                                        />
                                    </div>
                                    <div className="d-flex justify-content--center">
                                        <Button type="submit" className="btn btn__login btn__primary" >Login</Button>
                                    </div>

                                </Form>
                            </div>
                        </div>
                        <div className="rc__box__guidline p-10">
                            <span className="rc__box__guidline__icon">
                                <FontAwesomeIcon
                                    icon={faCode}
                                    onClick={() => this.setState({ isShow: !this.state.isShow })}
                                    className="mr-10"
                                />
                                <FontAwesomeIcon
                                    icon={faCopy}
                                />
                            </span>
                            {
                                this.state.isShow && (
                                    <pre className="rc__box__guidline__content">
                                        <code data-lang="html">
                                            <span>&lt;<span className="cl--red">Form</span> <span className="cl--green">onSubmit</span>=<span className="cl--blue">"this.onLogin()"</span>&gt;</span> <br /> <span>&lt;<span className="cl--red">ContentLoginForm</span> /&gt;</span><br /><span>&lt;/<span className="cl--red">Form</span>&gt;</span>
                                        </code>
                                    </pre>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="rc__box">
                    <div className="rc__box__content">
                        <div className="p-10">
                            <div className="rc__label mb-10">Register form:</div>
                            <div className="d-flex mb-20">
                                <Form
                                    onSubmit={this.onSubmit1}
                                    className="rc__login-form"
                                >
                                    <div className="d-flex flex-column mb-20 ">
                                        <label>Name</label>
                                        <InputValidate
                                            name="username"
                                            ref={(element) => this.username1 = element}
                                            onChange={this.checkValidUserName1}
                                            messageRequire={this.state.requireUserName1}
                                        />
                                    </div>
                                    <div className="d-flex flex-column mb-20">
                                        <label>Password</label>
                                        <InputValidate
                                            type="password"
                                            name="password"
                                            ref={(element) => this.password1 = element}
                                            onChange={this.checkValidPassword1}
                                            messageRequire={this.state.requirePassword1}
                                        />
                                    </div>
                                    <div className="d-flex flex-column mb-20">
                                        <label>Re-password</label>
                                        {/* check matching 2 field */}
                                        <InputValidate
                                            type="password"
                                            name="password"
                                            ref={(element) => this.password1 = element}
                                            onChange={this.checkValidPassword1}
                                            messageRequire={this.state.requirePassword1}
                                        />
                                    </div>
                                    <div className="d-flex flex-column mb-20 ">
                                        <label>Age</label>
                                        <InputNumber
                                            ref={e => this.numberValue = e}
                                            onChange={() => this.checkInvalidInputNumber(this.numberValue)}
                                            messageNumberRequire={this.state.messageNumberRequire}
                                        />
                                    </div>
                                    <div className="d-flex flex-column mb-20 ">
                                        <label>Email</label>
                                        <InputEmail
                                            ref={e => this.emailValue = e}
                                            onChange={() => this.checkInvalidInputEmail(this.emailValue)}
                                            messageEmailRequire={this.state.messageEmailRequire}
                                        />
                                    </div>
                                    <div className="d-flex justify-content--center">
                                        <Button type="submit" className="btn btn__login btn__primary" >Register</Button>
                                    </div>

                                </Form>
                            </div>
                        </div>
                        <div className="rc__box__guidline p-10">
                            <span className="rc__box__guidline__icon">
                                <FontAwesomeIcon
                                    icon={faCode}
                                    onClick={() => this.setState({ isShowRegister: !this.state.isShowRegister })}
                                    className="mr-10"
                                />
                                <FontAwesomeIcon
                                    icon={faCopy}
                                />
                            </span>
                            {
                                this.state.isShowRegister && (
                                    <pre className="rc__box__guidline__content">
                                        <code data-lang="html">
                                            <span>&lt;<span className="cl--red">Form</span> <span className="cl--green">onSubmit</span>=<span className="cl--blue">"this.onRegister()"</span>&gt;</span> <br /> <span>&lt;<span className="cl--red">ContentRegisterForm</span> /&gt;</span><br /><span>&lt;/<span className="cl--red">Form</span>&gt;</span>
                                        </code>
                                    </pre>
                                )
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}