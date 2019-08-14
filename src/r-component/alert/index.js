import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCopy } from '@fortawesome/free-solid-svg-icons';
import { Button, Alert } from '../../components';

export default class RcAlert extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false
        }
    }
    render() {
        return (
            <React.Fragment>
                <h1 className="rc__label-title">Alert types</h1>
                <div className="rc__box">
                    <div className="rc__box__content">
                        <div className="p-10">
                            <div className="rc__label mb-10">Basic usage:</div>
                            <div className="d-flex mb-20">
                                <Button onClick={() => Alert.info({ message: 'alert info', className: 'mt-10' })}>Alert info</Button>
                                <Button onClick={() => Alert.success({ message: 'alert success', className: 'mt-10' })}>Alert success</Button>
                                <Button onClick={() => Alert.error({ message: 'alert error', className: 'mt-10' })}>Alert error</Button>
                                <Button onClick={() => Alert.warning({ message: 'alert warning', className: 'mt-10' })}>Alert warning</Button>
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
                                            <span>Alert</span>.<span className="cl--red">info</span>&#x28;&#x7b;<br /> <span className="cl--green">message</span>=<span className="cl--blue">"Alert Info"</span>  <br />&#x7d;&#x29;
                                            <br />
                                            <br />
                                            <span>Alert</span>.<span className="cl--red">success</span>&#x28;&#x7b;<br /> <span className="cl--green">message</span>=<span className="cl--blue">"Alert Success"</span>  <br />&#x7d;&#x29;
                                            <br />
                                            <br />
                                            <span>Alert</span>.<span className="cl--red">error</span>&#x28;&#x7b;<br /> <span className="cl--green">message</span>=<span className="cl--blue">"Alert Error"</span>  <br />&#x7d;&#x29;
                                            <br />
                                            <br />
                                            <span>Alert</span>.<span className="cl--red">warning</span>&#x28;&#x7b;<br /> <span className="cl--green">message</span>=<span className="cl--blue">"Alert Warning"</span>  <br />&#x7d;&#x29;
                                            <br />
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
                            <div className="rc__label mb-10">Other usage:</div>
                            <div className="mb-10">
                                <h3 className="mb-5">description, closable, showIcon</h3>
                                <Alert
                                    closable
                                    type="info"
                                    message='Alert Informantion'
                                    description="Some text description"
                                />
                            </div>
                            <div className="mb-10">
                                <h3 className="mb-5">non-description, non-closable, non-showIcon</h3>
                                <Alert
                                    type="success"
                                    message='Alert Success'
                                    isHideIcon
                                />
                            </div>
                            <div className="mb-10">
                            <h3 className="mb-5">non-description, closable, hideIcon</h3>
                                <Alert
                                    closable
                                    isHideIcon
                                    type="error"
                                    message='Alert Error'
                                />
                            </div>
                            <div className="mb-10">
                            <h3 className="mb-5">non-description, non-closable, showIcon</h3>
                                <Alert
                                    type="warning"
                                    message='Alert Warning'
                                />

                            </div>
                        </div>
                        <div className="rc__box__guidline p-10">
                            <span className="rc__box__guidline__icon">
                                <FontAwesomeIcon
                                    icon={faCode}
                                    onClick={() => this.setState({ isShowAlert: !this.state.isShowAlert })}
                                    className="mr-10"
                                />
                                <FontAwesomeIcon
                                    icon={faCopy}
                                />
                            </span>
                            {
                                this.state.isShowAlert && (
                                    <pre className="rc__box__guidline__content">
                                        <code data-lang="html">
                                            <span>&lt;<span className="cl--red">Alert<br /> <span className="cl--green">type</span>=<span className="cl--blue">"info"</span></span><br /> <span className="cl--green">message</span>=<span className="cl--blue">"Alert Informantion"</span><br /> <span className="cl--green">description</span>=<span className="cl--blue">"Some text description"</span><br /> <span>closable</span><br />/&gt;</span>
                                            <br />
                                            <br />
                                            <span>&lt;<span className="cl--red">Alert<br /> <span className="cl--green">type</span>=<span className="cl--blue">"success"</span></span><br /> <span className="cl--green">message</span>=<span className="cl--blue">"Alert Success"</span><br /> <span>isHideIcon</span><br />/&gt;</span>
                                            <br />
                                            <br />
                                            <span>&lt;<span className="cl--red">Alert<br /> <span className="cl--green">type</span>=<span className="cl--blue">"error"</span></span><br /> <span className="cl--green">message</span>=<span className="cl--blue">"Alert Error"</span><br /> <span>isHideIcon</span><br /> <span>closable</span><br />/&gt;</span>
                                            <br />
                                            <br />
                                            <span>&lt;<span className="cl--red">Alert<br /> <span className="cl--green">type</span>=<span className="cl--blue">"warning"</span></span><br /> <span className="cl--green">message</span>=<span className="cl--blue">"Alert Warning"</span><br />/&gt;</span>
                                            <br />
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
