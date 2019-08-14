import React, { Component } from 'react';
import { Button, Message } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCopy } from '@fortawesome/free-solid-svg-icons';

export default class RcMessage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false
        }
    }
    render() {
        return (
            <React.Fragment>
                <h1 className="rc__label-title">Message types</h1>
                <div className="rc__box">
                    <div className="rc__box__content">
                        <div className="p-10">
                            <div className="rc__label mb-10">Basic usage:</div>
                            <div className="d-flex mb-20">
                                <Button onClick={() => Message.info({message:'message info'})}>message info</Button>
                                <Button onClick={() => Message.success({message:'message success'})}>message success</Button>
                                <Button onClick={() => Message.error({message:'message error'})}>message error</Button>
                                <Button onClick={() => Message.warning({message:'message warning'})}>message warning</Button>
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
                                            <span>Message</span>.<span className="cl--red">info</span>&#x28;&#x7b;<br/> <span className="cl--green">message</span>=<span className="cl--blue">"Message Info"</span>  <br/>&#x7d;&#x29;
                                            <br />
                                            <br />
                                            <span>Message</span>.<span className="cl--red">success</span>&#x28;&#x7b;<br/> <span className="cl--green">message</span>=<span className="cl--blue">"Message Success"</span>  <br/>&#x7d;&#x29;
                                            <br />
                                            <br />
                                            <span>Message</span>.<span className="cl--red">error</span>&#x28;&#x7b;<br/> <span className="cl--green">message</span>=<span className="cl--blue">"Message Error"</span>  <br/>&#x7d;&#x29;
                                            <br />
                                            <br />
                                            <span>Message</span>.<span className="cl--red">warning</span>&#x28;&#x7b;<br/> <span className="cl--green">message</span>=<span className="cl--blue">"Message Warning"</span>  <br/>&#x7d;&#x29;
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
                            <div className="rc__label mb-10">Duration time:</div>
                            <div className="d-flex mb-20">
                                <Button onClick={() => Message.info({message:'message info', duration: 1000})}>message info 1s</Button>
                                <Button onClick={() => Message.success({message:'message success', duration: 5000})}>message success 5s</Button>
                                <Button onClick={() => Message.error({message:'message error', duration: 10000})}>message error 10s</Button>
                                <Button onClick={() => Message.warning({message:'message warning', duration: 60000})}>message warning 1min</Button>
                            </div>
                        </div>
                        <div className="rc__box__guidline p-10">
                            <span className="rc__box__guidline__icon">
                                <FontAwesomeIcon
                                    icon={faCode}
                                    onClick={() => this.setState({ isShowDuration: !this.state.isShowDuration })}
                                    className="mr-10"
                                />
                                <FontAwesomeIcon
                                    icon={faCopy}
                                />
                            </span>
                            {
                                this.state.isShowDuration && (
                                    <pre className="rc__box__guidline__content">
                                        <code data-lang="html">
                                            <span>Message</span>.<span className="cl--red">info</span>&#x28;&#x7b;<br/> <span className="cl--green">message</span>=<span className="cl--blue">"Message Info"</span>  <br/> <span className="cl--green">duration</span>=<span className="cl--blue">"1000"</span><br/>&#x7d;&#x29;
                                            <br />
                                            <br />
                                            <span>Message</span>.<span className="cl--red">success</span>&#x28;&#x7b;<br/> <span className="cl--green">message</span>=<span className="cl--blue">"Message Success"</span>  <br/> <span className="cl--green">duration</span>=<span className="cl--blue">"5000"</span><br/>&#x7d;&#x29;
                                            <br />
                                            <br />
                                            <span>Message</span>.<span className="cl--red">error</span>&#x28;&#x7b;<br/> <span className="cl--green">message</span>=<span className="cl--blue">"Message Error"</span>  <br/> <span className="cl--green">duration</span>=<span className="cl--blue">"10000"</span><br/>&#x7d;&#x29;
                                            <br />
                                            <br />
                                            <span>Message</span>.<span className="cl--red">warning</span>&#x28;&#x7b;<br/> <span className="cl--green">message</span>=<span className="cl--blue">"Message Warning"</span>  <br/> <span className="cl--green">duration</span>=<span className="cl--blue">"60000"</span><br/>&#x7d;&#x29;
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
