import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCopy } from '@fortawesome/free-solid-svg-icons';
import { Button, Menu } from '../../components';

export default class RcMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false
        }
    }
    render() {
        return (
            <React.Fragment>
                <h1 className="rc__label-title">Menu types</h1>
                <div className="rc__box">
                    <div className="rc__box__content">
                        <div className="p-10">
                            <div className="rc__label mb-10">Basic usage left-menu:</div>
                            <div className="d-flex mb-20">
                                <Button onClick={() => this.setState({ showMenuLeft: !this.state.showMenuLeft })}>Left menu</Button>
                                <Menu
                                    title="Left Menu"
                                    visible={this.state.showMenuLeft}
                                >
                                    <p>Content menu</p>
                                    <p>Content menu</p>
                                    <p>Content menu</p>
                                    <p>Content menu..</p>
                                </Menu>
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
                                        <span>&lt;<span className="cl--red">Menu</span> <br /> <span className="cl--green">visible</span>=<span className="cl--blue">&#x7b;true&#x7d;</span><br /> <span className="cl--green">placement</span>=<span className="cl--blue">"left"</span><br /> <span className="cl--green">title</span>=<span className="cl--blue">"Left Menu"</span><br />&gt;</span> <br /> Content Menu<br /><span>&lt;/<span className="cl--red">Menu</span>&gt;</span>
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
                            <div className="rc__label mb-10">Basic usage right-menu:</div>
                            <div className="d-flex mb-20">
                                <Button onClick={() => this.setState({ showMenuRight: !this.state.showMenuRight })}>Right menu</Button>
                                <Menu
                                    title="Right Menu"
                                    placement="right"
                                    visible={this.state.showMenuRight}
                                >
                                    <p>Content menu</p>
                                    <p>Content menu</p>
                                    <p>Content menu</p>
                                    <p>Content menu..</p>
                                </Menu>
                            </div>
                        </div>
                        <div className="rc__box__guidline p-10">
                            <span className="rc__box__guidline__icon">
                                <FontAwesomeIcon
                                    icon={faCode}
                                    onClick={() => this.setState({ isShowRight: !this.state.isShowRight })}
                                    className="mr-10"
                                />
                                <FontAwesomeIcon
                                    icon={faCopy}
                                />
                            </span>
                            {
                                this.state.isShowRight && (
                                    <pre className="rc__box__guidline__content">
                                        <code data-lang="html">
                                        <span>&lt;<span className="cl--red">Menu</span> <br /> <span className="cl--green">visible</span>=<span className="cl--blue">&#x7b;true&#x7d;</span><br /> <span className="cl--green">placement</span>=<span className="cl--blue">"right"</span><br /> <span className="cl--green">title</span>=<span className="cl--blue">"Right Menu"</span><br />&gt;</span> <br /> Content Menu<br /><span>&lt;/<span className="cl--red">Menu</span>&gt;</span>
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
                            <div className="rc__label mb-10">Basic usage top-menu:</div>
                            <div className="d-flex mb-20">
                                <Button onClick={() => this.setState({ showMenuTop: !this.state.showMenuTop })}>Top menu</Button>
                                <Menu
                                    title="Top Menu"
                                    placement="top"
                                    visible={this.state.showMenuTop}
                                >
                                    <p>Content menu</p>
                                    <p>Content menu</p>
                                    <p>Content menu</p>
                                    <p>Content menu..</p>
                                </Menu>
                            </div>
                        </div>
                        <div className="rc__box__guidline p-10">
                            <span className="rc__box__guidline__icon">
                                <FontAwesomeIcon
                                    icon={faCode}
                                    onClick={() => this.setState({ isShowTop: !this.state.isShowTop })}
                                    className="mr-10"
                                />
                                <FontAwesomeIcon
                                    icon={faCopy}
                                />
                            </span>
                            {
                                this.state.isShowTop && (
                                    <pre className="rc__box__guidline__content">
                                        <code data-lang="html">
                                        <span>&lt;<span className="cl--red">Menu</span> <br /> <span className="cl--green">visible</span>=<span className="cl--blue">&#x7b;true&#x7d;</span><br /> <span className="cl--green">placement</span>=<span className="cl--blue">"top"</span><br /> <span className="cl--green">title</span>=<span className="cl--blue">"Top Menu"</span><br />&gt;</span> <br /> Content Menu<br /><span>&lt;/<span className="cl--red">Menu</span>&gt;</span>
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
                            <div className="rc__label mb-10">Basic usage bottom-menu:</div>
                            <div className="d-flex mb-20">
                                <Button onClick={() => this.setState({ showMenuBottom: !this.state.showMenuBottom })}>Bottom menu</Button>
                                <Menu
                                    title="Bottom Menu"
                                    placement="bottom"
                                    visible={this.state.showMenuBottom}
                                >
                                    <p>Content menu</p>
                                    <p>Content menu</p>
                                    <p>Content menu</p>
                                    <p>Content menu..</p>
                                </Menu>
                            </div>
                        </div>
                        <div className="rc__box__guidline p-10">
                            <span className="rc__box__guidline__icon">
                                <FontAwesomeIcon
                                    icon={faCode}
                                    onClick={() => this.setState({ isShowBottom: !this.state.isShowBottom })}
                                    className="mr-10"
                                />
                                <FontAwesomeIcon
                                    icon={faCopy}
                                />
                            </span>
                            {
                                this.state.isShowBottom && (
                                    <pre className="rc__box__guidline__content">
                                        <code data-lang="html">
                                        <span>&lt;<span className="cl--red">Menu</span> <br /> <span className="cl--green">visible</span>=<span className="cl--blue">&#x7b;true&#x7d;</span><br /> <span className="cl--green">placement</span>=<span className="cl--blue">"bottom"</span><br /> <span className="cl--green">title</span>=<span className="cl--blue">"Bottom Menu"</span><br />&gt;</span> <br /> Content Menu<br /><span>&lt;/<span className="cl--red">Menu</span>&gt;</span>
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
