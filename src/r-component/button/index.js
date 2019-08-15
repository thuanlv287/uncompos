import React, { Component } from 'react';
import { Button } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCopy } from '@fortawesome/free-solid-svg-icons';

export default class RcButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false,
            size: 'middle'
        }
    }
    clickButton = () => {
        alert('Do something !')
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <h1 className="rc__label-title">Button types</h1>
                    <div className="rc__box">
                        <div className="rc__box__content">
                            <div className="p-10">
                                <div className="rc__label mb-10">Behavior normal:</div>
                                <div className="d-flex mb-20">
                                </div>
                                <Button
                                    onClick={this.clickButton}
                                >
                                    Normal
                                </Button>
                                <Button
                                    onClick={this.clickButton}
                                    type="primary">
                                    Primary
                                </Button>
                                <Button
                                    onClick={this.clickButton}
                                    type="danger"
                                >
                                    Danger
                                </Button>
                                <Button
                                    onClick={this.clickButton}
                                    type="info"
                                >
                                    Info
                                </Button>
                                <Button
                                    onClick={this.clickButton}
                                    type="success"
                                >
                                    Success
                                </Button>
                                <Button
                                    onClick={this.clickButton}
                                    type="warning"
                                >
                                    Warning
                                </Button>
                                <Button
                                    onClick={this.clickButton}
                                    type="light"
                                >
                                    Light
                                </Button>
                                <Button
                                    onClick={this.clickButton}
                                    type="dark"
                                >
                                    Dark
                                </Button>
                                <Button
                                    onClick={this.clickButton}
                                    type="link"
                                >
                                    Link
                                </Button>
                            </div>
                            <div className="rc__box__guidline p-10">
                                <span className="rc__box__guidline__icon">
                                    <FontAwesomeIcon
                                        icon={faCode}
                                        onClick={() => this.setState({ isShowBehavior: !this.state.isShowBehavior })}
                                        className="mr-10"
                                    />
                                    <FontAwesomeIcon
                                        icon={faCopy}
                                    />
                                </span>
                                {
                                    this.state.isShowBehavior && (
                                        <pre className="rc__box__guidline__content">
                                            <code data-lang="html">
                                                <span>&lt;<span className="cl--red">Button</span>&gt;</span> Normal <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

                                                <br />

                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"primary"</span>&gt;</span> Primary <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

                                                <br />

                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"danger"</span>&gt;</span> Danger <span>&lt;/<span className="cl--red">Button</span>&gt;</span>
                                                <br />

                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"info"</span>&gt;</span> Info <span>&lt;/<span className="cl--red">Button</span>&gt;</span>
                                                <br />

                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"success"</span>&gt;</span> Success <span>&lt;/<span className="cl--red">Button</span>&gt;</span>
                                                <br />

                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"warning"</span>&gt;</span> Warning <span>&lt;/<span className="cl--red">Button</span>&gt;</span>
                                                <br />

                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"light"</span>&gt;</span> Light <span>&lt;/<span className="cl--red">Button</span>&gt;</span>
                                                <br />

                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"dark"</span>&gt;</span> Dark <span>&lt;/<span className="cl--red">Button</span>&gt;</span>
                                                <br />
                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"link"</span>&gt;</span> Link <span>&lt;/<span className="cl--red">Button</span>&gt;</span>
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
                                <div className="rc__label mb-10">Active button:</div>
                                <div className="d-flex mb-20">
                                    <Button
                                        active={true}
                                    >
                                        Normal
                                    </Button>
                                    <Button
                                        active={true}
                                        type="primary">
                                        Primary
                                    </Button>
                                    <Button
                                        active={true}
                                        type="danger"
                                    >
                                        Danger
                                    </Button>
                                    <Button
                                        active={true}
                                        type="info"
                                    >
                                        Info
                                    </Button>
                                    <Button
                                        active={true}
                                        type="success"
                                    >
                                        Success
                                    </Button>
                                    <Button
                                        active={true}
                                        type="warning"
                                    >
                                        Warning
                                    </Button>
                                    <Button
                                        active={true}
                                        type="light"
                                    >
                                        Light
                                    </Button>
                                    <Button
                                        active={true}
                                        type="dark"
                                    >
                                        Dark
                                    </Button>
                                    <Button
                                        active={true}
                                        type="link"
                                    >
                                        Link
                                    </Button>
                                </div>

                            </div>
                            <div className="rc__box__guidline p-10">
                                <span className="rc__box__guidline__icon">
                                    <FontAwesomeIcon
                                        icon={faCode}
                                        onClick={() => this.setState({ isActiceAndDisable: !this.state.isActiceAndDisable })}
                                        className="mr-10"
                                    />
                                    <FontAwesomeIcon
                                        icon={faCopy}
                                    />
                                </span>
                                {
                                    this.state.isActiceAndDisable && (
                                        <pre className="rc__box__guidline__content">
                                            <code data-lang="html">
                                                <span>&lt;<span className="cl--red">Button</span> <b>active</b>&gt;</span> Disable <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

                                                <br />
                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"primary"</span> <b>active</b>&gt;</span> Primary <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

                                                <br />
                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"danger"</span> <b>active</b>&gt;</span> Danger <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

                                                <br />
                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"info"</span> <b>active</b>&gt;</span> Info <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

                                                <br />
                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"success"</span> <b>active</b>&gt;</span> Success <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

                                                <br />
                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"warning"</span> <b>active</b>&gt;</span> Warning <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

                                                <br />
                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"light"</span> <b>active</b>&gt;</span> Light <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

                                                <br />
                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"dark"</span> <b>active</b>&gt;</span> Dark <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

                                                <br />
                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"link"</span> <b>active</b>&gt;</span> Link <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

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
                                <div className="rc__label mb-10">Disable button:</div>
                                <div className="d-flex mb-20">
                                    <Button
                                        disabled={true}
                                    >
                                        Normal
                                    </Button>
                                    <Button
                                        disabled={true}
                                        type="primary">
                                        Primary
                                    </Button>
                                    <Button
                                        disabled={true}
                                        type="danger"
                                    >
                                        Danger
                                    </Button>
                                    <Button
                                        disabled={true}
                                        type="info"
                                    >
                                        Info
                                    </Button>
                                    <Button
                                        disabled={true}
                                        type="success"
                                    >
                                        Success
                                    </Button>
                                    <Button
                                        disabled={true}
                                        type="warning"
                                    >
                                        Warning
                                    </Button>
                                    <Button
                                        disabled={true}
                                        type="light"
                                    >
                                        Light
                                    </Button>
                                    <Button
                                        disabled={true}
                                        type="dark"
                                    >
                                        Dark
                                    </Button>
                                    <Button
                                        disabled={true}
                                        type="link"
                                    >
                                        Link
                                    </Button>
                                </div>

                            </div>
                            <div className="rc__box__guidline p-10">
                                <span className="rc__box__guidline__icon">
                                    <FontAwesomeIcon
                                        icon={faCode}
                                        onClick={() => this.setState({ isDisabled: !this.state.isDisabled })}
                                        className="mr-10"
                                    />
                                    <FontAwesomeIcon
                                        icon={faCopy}
                                    />
                                </span>
                                {
                                    this.state.isDisabled && (
                                        <pre className="rc__box__guidline__content">
                                            <code data-lang="html">
                                                <span>&lt;<span className="cl--red">Button</span> <b>disabled</b>&gt;</span> Disable <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

                                                <br />
                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"primary"</span> <b>disabled</b>&gt;</span> Primary <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

                                                <br />
                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"danger"</span> <b>disabled</b>&gt;</span> Danger <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

                                                <br />
                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"info"</span> <b>disabled</b>&gt;</span> Info <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

                                                <br />
                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"success"</span> <b>disabled</b>&gt;</span> Success <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

                                                <br />
                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"warning"</span> <b>disabled</b>&gt;</span> Warning <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

                                                <br />
                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"light"</span> <b>disabled</b>&gt;</span> Light <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

                                                <br />
                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"dark"</span> <b>disabled</b>&gt;</span> Dark <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

                                                <br />
                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"link"</span> <b>disabled</b>&gt;</span> Link <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

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
                                <div className="rc__label mb-10">Loading button:</div>
                                <div className="d-flex mb-20">
                                    <Button
                                        loading={true}
                                    >
                                        Normal
                                    </Button>
                                    <Button
                                        loading={true}
                                        type="primary">
                                        Primary
                                    </Button>
                                    <Button
                                        loading={true}
                                        type="danger"
                                    >
                                        Danger
                                    </Button>
                                    <Button
                                        loading={true}
                                        type="info"
                                    >
                                        Info
                                    </Button>
                                    <Button
                                        loading={true}
                                        type="success"
                                    >
                                        Success
                                    </Button>
                                    <Button
                                        loading={true}
                                        type="warning"
                                    >
                                        Warning
                                    </Button>
                                    <Button
                                        loading={true}
                                        type="light"
                                    >
                                        Light
                                    </Button>
                                    <Button
                                        loading={true}
                                        type="dark"
                                    >
                                        Dark
                                    </Button>
                                    <Button
                                        loading={true}
                                        type="link"
                                    >
                                        Link
                                    </Button>
                                </div>

                            </div>
                            <div className="rc__box__guidline p-10">
                                <span className="rc__box__guidline__icon">
                                    <FontAwesomeIcon
                                        icon={faCode}
                                        onClick={() => this.setState({ isloading: !this.state.isloading })}
                                        className="mr-10"
                                    />
                                    <FontAwesomeIcon
                                        icon={faCopy}
                                    />
                                </span>
                                {
                                    this.state.isloading && (
                                        <pre className="rc__box__guidline__content">
                                            <code data-lang="html">
                                                <span>&lt;<span className="cl--red">Button</span> <b>loading</b>&gt;</span> Disable <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

                                                <br />
                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"primary"</span> <b>loading</b>&gt;</span> Primary <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

                                                <br />
                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"danger"</span> <b>loading</b>&gt;</span> Danger <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

                                                <br />
                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"info"</span> <b>loading</b>&gt;</span> Info <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

                                                <br />
                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"success"</span> <b>loading</b>&gt;</span> Success <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

                                                <br />
                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"warning"</span> <b>loading</b>&gt;</span> Warning <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

                                                <br />
                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"light"</span> <b>loading</b>&gt;</span> Light <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

                                                <br />
                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"dark"</span> <b>loading</b>&gt;</span> Dark <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

                                                <br />
                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"link"</span> <b>loading</b>&gt;</span> Link <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

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
                                <div className="rc__label mb-10">Sizing:</div>
                                <div className="d-flex mb-20">
                                    <Button
                                        onClick={() => this.setState({ size: 'large' })}
                                        size={this.state.size}
                                        type="primary"
                                    >
                                        Large
                            </Button>
                                    <Button
                                        onClick={() => this.setState({ size: 'normal' })}
                                        size={this.state.size}
                                    >
                                        Normal
                            </Button>
                                    <Button
                                        onClick={() => this.setState({ size: 'small' })}
                                        size={this.state.size}
                                        type="danger"
                                    >
                                        Small
                            </Button>
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
                                    this.state.isShow && <pre className="rc__box__guidline__content">
                                        <code data-lang="html">
                                            <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">size</span>=<span className="cl--blue">"large"</span>&gt;</span> Large <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

                                            <br />

                                            <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">size</span>=<span className="cl--blue">"normal"</span>&gt;</span> Normal <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

                                            <br />

                                            <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">size</span>=<span className="cl--blue">"small"</span>&gt;</span> Small <span>&lt;/<span className="cl--red">Button</span>&gt;</span>
                                        </code>
                                    </pre>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}