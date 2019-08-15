import React, { Component } from 'react';
import { Button, Drawer } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCopy } from '@fortawesome/free-solid-svg-icons';

export default class RcDrawer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false,
            isShowRight: false,
            isShowTop: false,
            isShowBottom: false,
        }
    }
    render() {
        return (
            <React.Fragment>
                <h1 className="rc__label-title">Drawer types</h1>
                <div className="rc__box">
                    <div className="rc__box__content">
                        <div className="p-10">
                            <div className="rc__label mb-10">Left drawer:</div>
                            <div className="d-flex mb-20">
                                <Button onClick={() => this.setState({ isDrawerLeft: true })}>Show</Button>
                                {
                                    this.state.isDrawerLeft &&
                                    <Drawer
                                        title="Left Drawer"
                                        visible={this.state.isDrawerLeft}
                                        onCancel={() => this.setState({ isDrawerLeft: false })}
                                    >
                                        <p>content drawer111</p>
                                    </Drawer>
                                }

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
                                            <span>&lt;<span className="cl--red">Drawer</span> <br /> <span className="cl--green">visible</span>=<span className="cl--blue">&#x7b;true&#x7d;</span><br /> <span className="cl--green">placement</span>=<span className="cl--blue">"left"</span><br /> <span className="cl--green">title</span>=<span className="cl--blue">"Left Drawer"</span><br />&gt;</span> <br /> Content drawer<br /><span>&lt;/<span className="cl--red">Drawer</span>&gt;</span>
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
                            <div className="rc__label mb-10">Right drawer:</div>
                            <div className="d-flex mb-20">
                                <Button onClick={() => this.setState({ isDrawerRight: true })}>Show</Button>
                                {
                                    this.state.isDrawerRight && 
                                    <Drawer
                                        title="Right Drawer"
                                        visible={this.state.isDrawerRight}
                                        onCancel={() => this.setState({ isDrawerRight: false })}
                                        placement="right"
                                    >
                                        <p>content drawer111</p>
                                    </Drawer>
                                }

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
                                            <span>&lt;<span className="cl--red">Drawer</span> <br /> <span className="cl--green">visible</span>=<span className="cl--blue">&#x7b;true&#x7d;</span><br /> <span className="cl--green">placement</span>=<span className="cl--blue">"right"</span><br /> <span className="cl--green">title</span>=<span className="cl--blue">"Right Drawer"</span><br />&gt;</span> <br /> Content drawer<br /><span>&lt;/<span className="cl--red">Drawer</span>&gt;</span>
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
                            <div className="rc__label mb-10">Top drawer:</div>
                            <div className="d-flex mb-20">
                                <Button onClick={() => this.setState({ isDrawerTop: true })}>Show</Button>
                                {
                                    this.state.isDrawerTop &&
                                    <Drawer
                                        title="Top Drawer"
                                        visible={this.state.isDrawerTop}
                                        onCancel={() => this.setState({ isDrawerTop: false })}
                                        placement="top"
                                    >
                                        <p>content drawer111</p>
                                    </Drawer>
                                }

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
                                            <span>&lt;<span className="cl--red">Drawer</span> <br /> <span className="cl--green">visible</span>=<span className="cl--blue">&#x7b;true&#x7d;</span><br /> <span className="cl--green">placement</span>=<span className="cl--blue">"top"</span><br /> <span className="cl--green">title</span>=<span className="cl--blue">"Top Drawer"</span><br />&gt;</span> <br /> Content drawer<br /><span>&lt;/<span className="cl--red">Drawer</span>&gt;</span>
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
                            <div className="rc__label mb-10">Bottom drawer:</div>
                            <div className="d-flex mb-20">
                                <Button onClick={() => this.setState({ isDrawerBottom: true })}>Show</Button>
                                {
                                    this.state.isDrawerBottom &&
                                    <Drawer
                                        title="Bottom Drawer"
                                        visible={this.state.isDrawerBottom}
                                        onCancel={() => this.setState({ isDrawerBottom: false })}
                                        placement="bottom"
                                    >
                                        <p>content drawer111</p>
                                    </Drawer>
                                }

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
                                            <span>&lt;<span className="cl--red">Drawer</span> <br /> <span className="cl--green">visible</span>=<span className="cl--blue">&#x7b;true&#x7d;</span><br /> <span className="cl--green">placement</span>=<span className="cl--blue">"bottom"</span><br /> <span className="cl--green">title</span>=<span className="cl--blue">"Bottom Drawer"</span><br />&gt;</span> <br /> Content drawer<br /><span>&lt;/<span className="cl--red">Drawer</span>&gt;</span>
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