import React, { Component } from 'react';
import { Button, CheckBox, Modal } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCopy } from '@fortawesome/free-solid-svg-icons';

export default class RcModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false,
            isShowModalLoading: false,
            isModalBasic: false,
        }
    }
    render() {
        console.log('isShowModalLoading: ', this.state.isShowModalLoading);
        return (
            <React.Fragment>
                <h1 className="rc__label-title">Modal types</h1>
                <div className="rc__box">
                    <div className="rc__box__content">
                        <div className="p-10">
                            <div className="rc__label mb-10">Basic:</div>
                            <div className="d-flex mb-20">
                                <Button onClick={() => this.setState({ isShowModal: true })}>Click Modal</Button>
                                <Modal
                                    onCancel={() => this.setState({ isShowModal: false })}
                                    onOk={() => alert('click ok')}
                                    title="Basic modal"
                                    visible={this.state.isShowModal}
                                >
                                    <p>content Modal</p>

                                </Modal>
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
                                            <span>&lt;<span className="cl--red">Modal</span> <br /> <span className="cl--green">title</span>=<span>"Basic modal"</span><br /> <span className="cl--green">onOk</span>=<span>&#x7b;this.<span className="cl--red">handleOk</span>&#x28;&#x29;&#x7d;</span><br /> <span className="cl--green">onCancle</span>=<span>&#x7b;this.<span className="cl--red">handleCancel</span>&#x28;&#x29;&#x7d;</span><br /> <span className="cl--green">visible</span>=<span className="cl--blue">&#x7b;this.state.isShow&#x7d;</span> <br/>&gt;</span> <br /> Content modal ...<br /><span>&lt;/<span className="cl--red">Modal</span>&gt;</span>
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
                            <div className="rc__label mb-10">Loading button ok</div>
                            <div className="d-flex mb-20">
                                <Button onClick={() => this.setState({ isShowModalLoading: true })}>Click Modal</Button>
                                <Modal
                                    onCancel={() => this.setState({ isShowModalLoading: false})}
                                    onOk={() =>  alert('click ok')}
                                    loading={true}
                                    title="Loading Modal"
                                    visible={this.state.isShowModalLoading}
                                >
                                    <p>content Modal</p>

                                </Modal>
                            </div>
                        </div>
                        <div className="rc__box__guidline p-10">
                            <span className="rc__box__guidline__icon">
                                <FontAwesomeIcon
                                    icon={faCode}
                                    onClick={() => this.setState({ isShowLoading: !this.state.isShowLoading })}
                                    className="mr-10"
                                />
                                <FontAwesomeIcon
                                    icon={faCopy}
                                />
                            </span>
                            {
                                this.state.isShowLoading && (
                                    <pre className="rc__box__guidline__content">
                                        <code data-lang="html">
                                            <span>&lt;<span className="cl--red">Modal</span> <br /> <span className="cl--green">title</span>=<span>"Basic modal"</span><br /> <span className="cl--green">onOk</span>=<span>&#x7b;this.<span className="cl--red">handleOk</span>&#x28;&#x29;&#x7d;</span><br /> <span className="cl--green">onCancle</span>=<span>&#x7b;this.<span className="cl--red">handleCancel</span>&#x28;&#x29;&#x7d;</span><br /> <span className="cl--green">visible</span>=<span className="cl--blue">&#x7b;this.state.isShow&#x7d;</span> <br /> <span className="cl--green">loading</span>=<span className="cl--blue">&#x7b;true&#x7d;</span><br/>&gt;</span> <br /> Content modal ...<br /><span>&lt;/<span className="cl--red">Modal</span>&gt;</span>
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