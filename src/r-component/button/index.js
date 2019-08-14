import React, { Component } from 'react';
import { Button } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCopy } from '@fortawesome/free-solid-svg-icons';

export default class RcButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false,
            size: 'normal'
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
                                <div className="rc__label mb-10">Active and disabled:</div>
                                <div className="d-flex mb-20">
                                    <Button
                                        onClick={() => this.setState({ isActive: !this.state.isActive })}
                                        type="primary"
                                        active={this.state.isActive}
                                    >
                                        Active
                                </Button>
                                    <Button
                                        onClick={this.clickButton}
                                        disabled
                                    >
                                        Disable
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
                                                <span>&lt;<span className="cl--red">Button</span> <span className="cl--green">type</span>=<span className="cl--blue">"primary"</span>&gt;</span> Active <span>&lt;/<span className="cl--red">Button</span>&gt;</span>

                                                <br />

                                                <span>&lt;<span className="cl--red">Button</span> <b>disabled</b>&gt;</span> Disable <span>&lt;/<span className="cl--red">Button</span>&gt;</span>
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
                                <div className="rc__label mb-10">Loading:</div>
                                <div className="d-flex mb-20">
                                    <Button
                                        onClick={() => this.setState({ loading: !this.state.loading })}
                                        loading={this.state.loading}
                                        type="primary">
                                        Loading
                            </Button>
                                </div>

                            </div>
                            <div className="rc__box__guidline p-10">
                                <span className="rc__box__guidline__icon">
                                    <FontAwesomeIcon
                                        icon={faCode}
                                        onClick={() => this.setState({ isLoading: !this.state.isLoading })}
                                        className="mr-10"
                                    />
                                    <FontAwesomeIcon
                                        icon={faCopy}
                                    />
                                </span>
                                {
                                    this.state.isLoading && (
                                        <pre className="rc__box__guidline__content">
                                            <code data-lang="html">
                                                <span>&lt;<span className="cl--red">Button</span> <b>loading</b>&gt;</span> Loading <span>&lt;/<span className="cl--red">Button</span>&gt;</span>
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