import React, { Component } from 'react';
import { Button, CheckBox, DropDown } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCopy, faCogs, faCog } from '@fortawesome/free-solid-svg-icons';

export default class RcDropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false,
            isShowBtn: false,
            isShowIcon: false,
        }

    }
    render() {
        return (
            <React.Fragment>
                <h1 className="rc__label-title">Dropdown types</h1>
                <div className="rc__box">
                    <div className="rc__box__content">
                        <div className="p-10">
                            <div className="rc__label mb-10">Dropdown type text:</div>
                            <div className="d-flex mb-20">
                                <DropDown
                                    type="text"
                                    text="Dropdown"
                                >
                                    <ul>
                                        <li>Item 1</li>
                                        <li>Item 2</li>
                                    </ul>
                                </DropDown>
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
                                            <span>&lt;<span className="cl--red">DropDown</span><br/> <span className="cl--green">type</span>=<span className="cl--blue">"text"</span><br/> <span className="cl--green">text</span>=<span className="cl--blue">"Dropdown"</span><br/>&gt;</span> <br/> <span>&lt;<span className="cl--red">ul</span>&gt;</span> <br/>  <span>&lt;<span className="cl--red">li</span>&gt;</span> Item 1 <span>&lt;/<span className="cl--red">li</span>&gt;</span><br />  <span>&lt;<span className="cl--red">li</span>&gt;</span> Item 2 <span>&lt;/<span className="cl--red">li</span>&gt;</span> <br/> <span>&lt;/<span className="cl--red">ul</span>&gt;</span> <br/><span>&lt;/<span className="cl--red">DropDown</span>&gt;</span>

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
                            <div className="rc__label mb-10">Dropdown type Button:</div>
                            <div className="d-flex mb-20">
                                <DropDown
                                    type="button"
                                    textBtn="Dropdown"
                                >
                                    <ul>
                                        <li>Item 1</li>
                                        <li>Item 2</li>
                                    </ul>
                                </DropDown>
                            </div>

                        </div>
                        <div className="rc__box__guidline p-10">
                            <span className="rc__box__guidline__icon">
                                <FontAwesomeIcon
                                    icon={faCode}
                                    onClick={() => this.setState({ isShowBtn: !this.state.isShowBtn })}
                                    className="mr-10"
                                />
                                <FontAwesomeIcon
                                    icon={faCopy}
                                />
                            </span>
                            {
                                this.state.isShowBtn && (
                                    <pre className="rc__box__guidline__content">
                                        <code data-lang="html">
                                            <span>&lt;<span className="cl--red">DropDown</span><br/> <span className="cl--green">type</span>=<span className="cl--blue">"button"</span><br/> <span className="cl--green">textBtn</span>=<span className="cl--blue">"Dropdown"</span><br/>&gt;</span> <br/> <span>&lt;<span className="cl--red">ul</span>&gt;</span> <br/>  <span>&lt;<span className="cl--red">li</span>&gt;</span> Item 1 <span>&lt;/<span className="cl--red">li</span>&gt;</span><br />  <span>&lt;<span className="cl--red">li</span>&gt;</span> Item 2 <span>&lt;/<span className="cl--red">li</span>&gt;</span> <br/> <span>&lt;/<span className="cl--red">ul</span>&gt;</span> <br/><span>&lt;/<span className="cl--red">DropDown</span>&gt;</span>

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
                            <div className="rc__label mb-10">Dropdown type Icon:</div>
                            <div className="d-flex mb-20">
                                <DropDown
                                    type="icon"
                                    icon={faCog}
                                >
                                    <ul>
                                        <li>Item 1</li>
                                        <li>Item 2</li>
                                    </ul>
                                </DropDown>
                            </div>

                        </div>
                        <div className="rc__box__guidline p-10">
                            <span className="rc__box__guidline__icon">
                                <FontAwesomeIcon
                                    icon={faCode}
                                    onClick={() => this.setState({ isShowIcon: !this.state.isShowIcon })}
                                    className="mr-10"
                                />
                                <FontAwesomeIcon
                                    icon={faCopy}
                                />
                            </span>
                            {
                                this.state.isShowIcon && (
                                    <pre className="rc__box__guidline__content">
                                        <code data-lang="html">
                                            <span>&lt;<span className="cl--red">DropDown</span><br/> <span className="cl--green">type</span>=<span className="cl--blue">"icon"</span><br/> <span className="cl--green">icon</span>=<span>&#x7b;<span className="cl--red">Icon</span> /&gt;</span>&#x7d;<br/>&gt;</span> <br/> <span>&lt;<span className="cl--red">ul</span>&gt;</span> <br/>  <span>&lt;<span className="cl--red">li</span>&gt;</span> Item 1 <span>&lt;/<span className="cl--red">li</span>&gt;</span><br />  <span>&lt;<span className="cl--red">li</span>&gt;</span> Item 2 <span>&lt;/<span className="cl--red">li</span>&gt;</span> <br/> <span>&lt;/<span className="cl--red">ul</span>&gt;</span> <br/><span>&lt;/<span className="cl--red">DropDown</span>&gt;</span>

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