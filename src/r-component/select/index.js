import React, { Component } from 'react';
import { Button, CheckBox, Select, Option } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCopy } from '@fortawesome/free-solid-svg-icons';

export default class RcSelect extends Component {
    constructor(props){
        super(props)
        this.state = {
            isShow: false
        }
    }
    render() {
        return (
            <React.Fragment>
                <h1 className="rc__label-title">Select types</h1>
                <div className="rc__box">
                    <div className="rc__box__content">
                        <div className="p-10">
                            <div className="rc__label mb-10">Basic usage:</div>
                            <div className="d-flex mb-20">
                                <Select defaultValue={1} >
                                    <Option value={1}>Option1</Option>
                                    <Option value={2}>Option2</Option>
                                    <Option value={3}>Option3</Option>
                                </Select>
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
                                            <span>&lt;<span className="cl--red">Select</span> <span className="cl--green">defaultValue</span>=<span className="cl--blue">"1"</span>&gt;</span><br /><span> &lt;<span className="cl--red">Option</span> <span className="cl--green">value</span>=<span className="cl--blue">"1"</span>&gt;</span> Option1 <span>&lt;/<span className="cl--red">Option</span>&gt;<br/> &lt;<span className="cl--red">Option</span> <span className="cl--green">value</span>=<span className="cl--blue">"2"</span>&gt;</span> Option2 <span>&lt;/<span className="cl--red">Option</span>&gt;<br /> &lt;<span className="cl--red">Option</span> <span className="cl--green">value</span>=<span className="cl--blue">"3"</span>&gt;</span> Option3 <span>&lt;/<span className="cl--red">Option</span>&gt;</span>
<br/><span>&lt;/<span className="cl--red">Select</span>&gt;</span>

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