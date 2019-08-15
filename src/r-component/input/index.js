import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCopy, faSign, faSmile, faInfo, faMailBulk, faUser, faSortNumericDown, faLink } from '@fortawesome/free-solid-svg-icons';
import { Input, TextArea, InputValidate, InputNumber, InputEmail, InputUrl } from '../../components';
import { isEmail, isURL } from '../utils/common';

export default class RcInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowInput: false,
            isInputPrefix: false,
            isShowSize: false,
            isShowTextarea: false,
        }
    }
    checkValidPassword1 = () => {
        this.setMessage(this.password1, 'requirePassword1');
        console.log('value input: ', this.password1.value)
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
    setMessageUrl = (element, key, message = ' Yêu câu Url') => {
        if (!isURL(element.value.trim())) {
            this.setState({
                [key]: message
            })
        } else {
            this.setState({
                [key]: null
            })
        }
    }

    checkInvalidUrl = (element) => {
        if (!element || !element.value.trim()) {
            this.setMessage(this.url, 'messageUrlRequire');
        } else {
            console.log('aa');
            if (!isURL(element.value.trim())) {
                this.setMessageUrl(this.url, 'messageUrlRequire');
            }
            else {
                this.setMessageUrl(this.url, 'messageUrlRequire');
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="rc__label-title">Input types</h1>
                <div className="rc__box">
                    <div className="rc__box__content">
                        <div className="p-10">
                            <div className="rc__label mb-10">Basic usage:</div>
                            <div className="d-flex mb-20">
                                <Input
                                    placeholder="Basic usage"
                                    onChange={this.onChange}
                                />
                            </div>
                        </div>
                        <div className="rc__box__guidline p-10">
                            <span className="rc__box__guidline__icon">
                                <FontAwesomeIcon
                                    icon={faCode}
                                    onClick={() => this.setState({ isShowInput: !this.state.isShowInput })}
                                    className="mr-10"
                                />
                                <FontAwesomeIcon
                                    icon={faCopy}
                                />
                            </span>
                            {
                                this.state.isShowInput && (
                                    <pre className="rc__box__guidline__content">
                                        <code data-lang="html">
                                            <span>&lt;<span className="cl--red">Input</span> <span className="cl--green">placeholder</span>=<span className="cl--blue">"Basic usage"</span>/&gt;</span>
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
                            <div className="rc__label mb-10">Prefix input:</div>
                            <div className="d-flex mb-20">
                                <Input
                                    placeholder="Prefix input"
                                    prefix={() => (<FontAwesomeIcon
                                        icon={faSmile}
                                    />)}
                                />
                            </div>
                        </div>
                        <div className="rc__box__guidline p-10">
                            <span className="rc__box__guidline__icon">
                                <FontAwesomeIcon
                                    icon={faCode}
                                    onClick={() => this.setState({ isInputPrefix: !this.state.isInputPrefix })}
                                    className="mr-10"
                                />
                                <FontAwesomeIcon
                                    icon={faCopy}
                                />
                            </span>
                            {
                                this.state.isInputPrefix && (
                                    <pre className="rc__box__guidline__content">
                                        <code data-lang="html">
                                            <span>&lt;<span className="cl--red">Input</span> <span className="cl--green">prefix</span>=<span><span>&#123;</span><span>&#40;</span><span>&#41;</span>=><span>&#40;</span><span>&lt;<span className="cl--red">Icon</span> /&gt;</span><span>&#41;</span><span>&#125;</span></span> <span className="cl--green">placeholder</span>=<span className="cl--blue">"Prefix input"</span>/&gt;</span>
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
                            <div className="rc__label mb-10">Suffix input:</div>
                            <div className="d-flex mb-20">
                                <Input
                                    placeholder="Suffix input"
                                    suffix={() => (<FontAwesomeIcon
                                        icon={faInfo}
                                    />)}
                                />
                            </div>
                        </div>
                        <div className="rc__box__guidline p-10">
                            <span className="rc__box__guidline__icon">
                                <FontAwesomeIcon
                                    icon={faCode}
                                    onClick={() => this.setState({ isInputSuffix: !this.state.isInputSuffix })}
                                    className="mr-10"
                                />
                                <FontAwesomeIcon
                                    icon={faCopy}
                                />
                            </span>
                            {
                                this.state.isInputSuffix && (
                                    <pre className="rc__box__guidline__content">
                                        <code data-lang="html">
                                            <span>&lt;<span className="cl--red">Input</span> <span className="cl--green">suffix</span>=<span><span>&#123;</span><span>&#40;</span><span>&#41;</span>=><span>&#40;</span><span>&lt;<span className="cl--red">Icon</span> /&gt;</span><span>&#41;</span><span>&#125;</span></span> <span className="cl--green">placeholder</span>=<span className="cl--blue">"Suffix input"</span>/&gt;</span>
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
                            <div className="rc__label mb-10">Sizes:</div>
                            <div className="d-flex mb-20">
                                <Input
                                    placeholder="Large size"
                                    size="large"
                                />

                            </div>
                            <div className="d-flex mb-20">
                                <Input
                                    placeholder="Normal size"
                                    size="middle"
                                />


                            </div>
                            <div className="d-flex mb-20">
                                <Input
                                    placeholder="Small size"
                                    size="small"
                                />

                            </div>
                        </div>
                        <div className="rc__box__guidline p-10">
                            <span className="rc__box__guidline__icon">
                                <FontAwesomeIcon
                                    icon={faCode}
                                    onClick={() => this.setState({ isShowSize: !this.state.isShowSize })}
                                    className="mr-10"
                                />
                                <FontAwesomeIcon
                                    icon={faCopy}
                                />
                            </span>
                            {
                                this.state.isShowSize && (
                                    <pre className="rc__box__guidline__content">
                                        <code data-lang="html">
                                            <span>&lt;<span className="cl--red">Input</span> <span className="cl--green">size</span>=<span className="cl--blue">"large"</span> <span className="cl--green">placeholder</span>=<span className="cl--blue">"Large size"</span> /&gt;</span>
                                            <br />
                                            <span>&lt;<span className="cl--red">Input</span> <span className="cl--green">size</span>=<span className="cl--blue">"normal"</span> <span className="cl--green">placeholder</span>=<span className="cl--blue">"Normal size"</span> /&gt;</span>
                                            <br />
                                            <span>&lt;<span className="cl--red">Input</span> <span className="cl--green">size</span>=<span className="cl--blue">"small"</span> <span className="cl--green">placeholder</span>=<span className="cl--blue">"Small size"</span> /&gt;</span>
                                            <br />
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
                            <div className="rc__label mb-10">Text area:</div>
                            <div className="d-flex mb-20">
                                <TextArea
                                    placeholder="Text area"
                                />

                            </div>
                        </div>
                        <div className="rc__box__guidline p-10">
                            <span className="rc__box__guidline__icon">
                                <FontAwesomeIcon
                                    icon={faCode}
                                    onClick={() => this.setState({ isShowTextarea: !this.state.isShowTextarea })}
                                    className="mr-10"
                                />
                                <FontAwesomeIcon
                                    icon={faCopy}
                                />
                            </span>
                            {
                                this.state.isShowTextarea && (
                                    <pre className="rc__box__guidline__content">
                                        <code data-lang="html">
                                            <span>&lt;<span className="cl--red">TextArea</span><span className="cl--green"> placeholder</span>=<span className="cl--blue">"Text area"</span> /&gt;</span>
                                            <br />
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
                            <div className="rc__label mb-10">Input validate:</div>
                            <div className="d-flex mb-20">

                                <InputValidate
                                    suffix={() => (<FontAwesomeIcon
                                        icon={faInfo}
                                    />)}
                                    prefix={() => (<FontAwesomeIcon
                                        icon={faSmile}
                                    />)}
                                    type="password"
                                    name="password"
                                    className="customize"
                                    size="large"
                                    ref={(element) => this.password1 = element}
                                    onChange={this.checkValidPassword1}
                                    messageRequire={this.state.requirePassword1}
                                />

                            </div>
                        </div>
                        <div className="rc__box__guidline p-10">
                            <span className="rc__box__guidline__icon">
                                <FontAwesomeIcon
                                    icon={faCode}
                                    onClick={() => this.setState({ isShowTextarea: !this.state.isShowTextarea })}
                                    className="mr-10"
                                />
                                <FontAwesomeIcon
                                    icon={faCopy}
                                />
                            </span>
                            {
                                this.state.isShowTextarea && (
                                    <pre className="rc__box__guidline__content">
                                        <code data-lang="html">
                                            <span>&lt;<span className="cl--red">TextArea</span><span className="cl--green"> placeholder</span>=<span className="cl--blue">"Text area"</span> /&gt;</span>
                                            <br />
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
                            <div className="rc__label mb-10">Input Email validate:</div>
                            <div className="d-flex mb-20">

                                <InputEmail
                                    suffix={() => (<FontAwesomeIcon
                                        icon={faMailBulk}
                                    />)}
                                    prefix={() => (<FontAwesomeIcon
                                        icon={faUser}
                                    />)}
                                    name="password"
                                    className="customize"
                                    size="large"

                                    ref={e => this.emailValue = e}
                                    onChange={() => this.checkInvalidInputEmail(this.emailValue)}
                                    messageEmailRequire={this.state.messageEmailRequire}
                                />

                            </div>
                        </div>
                        <div className="rc__box__guidline p-10">
                            <span className="rc__box__guidline__icon">
                                <FontAwesomeIcon
                                    icon={faCode}
                                    onClick={() => this.setState({ isShowTextarea: !this.state.isShowTextarea })}
                                    className="mr-10"
                                />
                                <FontAwesomeIcon
                                    icon={faCopy}
                                />
                            </span>
                            {
                                this.state.isShowTextarea && (
                                    <pre className="rc__box__guidline__content">
                                        <code data-lang="html">
                                            <span>&lt;<span className="cl--red">TextArea</span><span className="cl--green"> placeholder</span>=<span className="cl--blue">"Text area"</span> /&gt;</span>
                                            <br />
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
                            <div className="rc__label mb-10">Input Number validate:</div>
                            <div className="d-flex mb-20">

                                <InputNumber
                                    suffix={() => (<FontAwesomeIcon
                                        icon={faMailBulk}
                                    />)}
                                    prefix={() => (<FontAwesomeIcon
                                        icon={faSortNumericDown}
                                    />)}
                                    label="Number"
                                    vertical
                                    className="customize"
                                    size="large"

                                    ref={e => this.numberValue = e}
                                    onChange={() => this.checkInvalidInputNumber(this.numberValue)}
                                    messageNumberRequire={this.state.messageNumberRequire}
                                />

                            </div>
                        </div>
                        <div className="rc__box__guidline p-10">
                            <span className="rc__box__guidline__icon">
                                <FontAwesomeIcon
                                    icon={faCode}
                                    onClick={() => this.setState({ isShowTextarea: !this.state.isShowTextarea })}
                                    className="mr-10"
                                />
                                <FontAwesomeIcon
                                    icon={faCopy}
                                />
                            </span>
                            {
                                this.state.isShowTextarea && (
                                    <pre className="rc__box__guidline__content">
                                        <code data-lang="html">
                                            <span>&lt;<span className="cl--red">TextArea</span><span className="cl--green"> placeholder</span>=<span className="cl--blue">"Text area"</span> /&gt;</span>
                                            <br />
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
                            <div className="rc__label mb-10">Input Url validate:</div>
                            <div className="d-flex mb-20">

                                <InputUrl
                                    suffix={() => (<FontAwesomeIcon
                                        icon={faLink}
                                    />)}
                                    prefix={() => (<FontAwesomeIcon
                                        icon={faSortNumericDown}
                                    />)}
                                    label="Url"
                                    vertical
                                    className="customize"
                                    size="large"

                                    ref={e => this.url = e}
                                    onChange={() => this.checkInvalidUrl(this.url)}
                                    messageUrlRequire={this.state.messageUrlRequire}
                                />

                            </div>
                        </div>
                        <div className="rc__box__guidline p-10">
                            <span className="rc__box__guidline__icon">
                                <FontAwesomeIcon
                                    icon={faCode}
                                    onClick={() => this.setState({ isShowTextarea: !this.state.isShowTextarea })}
                                    className="mr-10"
                                />
                                <FontAwesomeIcon
                                    icon={faCopy}
                                />
                            </span>
                            {
                                this.state.isShowTextarea && (
                                    <pre className="rc__box__guidline__content">
                                        <code data-lang="html">
                                            <span>&lt;<span className="cl--red">TextArea</span><span className="cl--green"> placeholder</span>=<span className="cl--blue">"Text area"</span> /&gt;</span>
                                            <br />
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