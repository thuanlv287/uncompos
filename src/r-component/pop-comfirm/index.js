import React, { Component } from 'react';
import { Button, CheckBox } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCopy } from '@fortawesome/free-solid-svg-icons';
import PopConfirm from '../../components/pop-confirm';

export default class RcPopComfirm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false
        }
    }
    render() {
        return (
            <React.Fragment>
                <h1 className="rc__label-title">PopComfirm types</h1>
                <div className="rc__box">
                    <div className="rc__box__content">
                        <div className="p-10">
                            <div className="rc__label mb-10">Behavior normal:</div>
                            <div className="d-flex mb-20">
                                <PopConfirm
                                    content="Message confirm ?"
                                    onOk={() => alert('ok')}
                                    onCancel={() => alert('cancel')}
                                >
                                   <span className="color--red">delete</span>
                                </PopConfirm>
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
                                            <span>&lt;<span className="cl--red">PopConfirm</span> <br/> <span className="cl--green">content</span>=<span className="cl--blue">"Message confirm ?"</span><br/> <span className="cl--green">onOk</span>=<span className="cl--blue">&#x7b;this.handleOk()&#x7d;</span> <br/> <span className="cl--green">onCancel</span>=<span className="cl--blue">&#x7b;this.handleCancel()&#x7d;</span> <br/>&gt;</span> <br/> delete<br/><span>&lt;/<span className="cl--red">PopConfirm</span>&gt;</span>
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