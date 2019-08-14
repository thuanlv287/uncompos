import React, { Component } from 'react';
import { Button, CheckBox, Radio } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCopy } from '@fortawesome/free-solid-svg-icons';

export default class RcRadio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false,
            isShowGroup: false,
        }
    }
    render() {
        return (
            <React.Fragment>
                <h1 className="rc__label-title">Radio types</h1>
                <div className="rc__box">
                    <div className="rc__box__content">
                        <div className="p-10">
                            <div className="rc__label mb-10">Basic usage:</div>
                            <div className="d-flex mb-20">
                                <Radio
                                    label="Choose me"
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
                                            <span>&lt;<span className="cl--red">Radio <span className="cl--green">label</span>=<span className="cl--blue">"Choose me"</span></span> /&gt;</span>
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
                            <div className="rc__label mb-10">Group radio:</div>
                            <div>
                                <Radio name="sex" label="Male" />
                            </div>
                            <div>
                                <Radio name="sex" label="Female" />
                            </div>
                        </div>
                        <div className="rc__box__guidline p-10">
                            <span className="rc__box__guidline__icon">
                                <FontAwesomeIcon
                                    icon={faCode}
                                    onClick={() => this.setState({ isShowGroup: !this.state.isShowGroup })}
                                    className="mr-10"
                                />
                                <FontAwesomeIcon
                                    icon={faCopy}
                                />
                            </span>
                            {
                                this.state.isShowGroup && (
                                    <pre className="rc__box__guidline__content">
                                        <code data-lang="html">
                                            <span>&lt;<span className="cl--red">Radio <span className="cl--green">name</span>=<span className="cl--blue">"sex"</span> <span className="cl--green">label</span>=<span className="cl--blue">"Male"</span></span> /&gt;</span>
                                            <br />
                                            <span>&lt;<span className="cl--red">Radio <span className="cl--green">name</span>=<span className="cl--blue">"sex"</span> <span className="cl--green">label</span>=<span className="cl--blue">"Female"</span></span> /&gt;</span>
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