import React, { Component } from 'react';
import { Button, CheckBox } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCopy } from '@fortawesome/free-solid-svg-icons';

export default class RcCheckBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false,
            isShowCheckedDefault: false,
            isShowDisableChecked: false,
            size: 'normal',
        }
    }
    clickButton = () => {
        alert('Do something !')
    }
    onChange = () => {
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <h1 className="rc__label-title">Input types</h1>
                    <div className="rc__box">
                        <div className="rc__box__content">
                            <div className="p-10">
                                <div className="rc__label mb-10">Basic usage:</div>
                                <div className="d-flex mb-20">
                                    <CheckBox
                                        label="Option 1"
                                        ref={e => this.inputCheck = e}
                                        onClick={this.onChange}
                                    />
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
                                                <span>&lt;<span className="cl--red">CheckBox</span><span> <span className="cl--green">label</span>=<span className="cl--blue">"Option 1"</span></span> /&gt;</span>
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
                                <div className="rc__label mb-10">DefaultChecked</div>
                                <div className="d-flex mb-20">
                                    <CheckBox
                                        defaultChecked
                                        label="Option 1"
                                    />
                                </div>
                            </div>
                            <div className="rc__box__guidline p-10">
                                <span className="rc__box__guidline__icon">
                                    <FontAwesomeIcon
                                        icon={faCode}
                                        onClick={() => this.setState({ isShowCheckedDefault: !this.state.isShowCheckedDefault })}
                                        className="mr-10"
                                    />
                                    <FontAwesomeIcon
                                        icon={faCopy}
                                    />
                                </span>
                                {
                                    this.state.isShowCheckedDefault && (
                                        <pre className="rc__box__guidline__content">
                                            <code data-lang="html">
                                                <span>&lt;<span className="cl--red">CheckBox</span><span><b> defaultChecked</b> <span className="cl--green">label</span>=<span className="cl--blue">"Option 1"</span></span> /&gt;</span>
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
                                <div className="rc__label mb-10">Disabled checked</div>
                                <div className="d-flex mb-20">
                                    <CheckBox
                                        disabled
                                        label="Option1"
                                    />
                                </div>
                            </div>
                            <div className="rc__box__guidline p-10">
                                <span className="rc__box__guidline__icon">
                                    <FontAwesomeIcon
                                        icon={faCode}
                                        onClick={() => this.setState({ isShowDisableChecked: !this.state.isShowDisableChecked })}
                                        className="mr-10"
                                    />
                                    <FontAwesomeIcon
                                        icon={faCopy}
                                    />
                                </span>
                                {
                                    this.state.isShowDisableChecked && (
                                        <pre className="rc__box__guidline__content">
                                            <code data-lang="html">
                                                <span>&lt;<span className="cl--red">CheckBox</span><span><b> disabled</b> <span className="cl--green">label</span>=<span className="cl--blue">"Option 1"</span></span> /&gt;</span>
                                            </code>
                                        </pre>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}