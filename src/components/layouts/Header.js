import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Profile from './Profile';
import Settings from './Settings';

export default class Header extends Component {
    render() {
        return (
            <div className="header d-flex justify-content--between align-items--center">
                <span className="header__fold">
                    <FontAwesomeIcon
                        icon={faBars}
                        onClick={this.props.toggleBar}
                        />
                </span>
                <div className="d-flex align-items--center">
                    <div className="mr-20">
                        <Profile />
                    </div>
                    <Settings />
                </div>
            </div>
        )
    }
}