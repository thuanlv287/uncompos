import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faHome, faBars } from '@fortawesome/free-solid-svg-icons';
import { Header, Footer } from '../components/layouts';
import { Drawer, Button, Menu } from '../components';
import { rcomponents } from './contants'
import './r-components.scss';
import Message from '../components/message'
import Alert from '../components/alert';

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="d-flex flex-column">
          <div className={this.props.isDrawer ? '' : 'd-none'}>
            {this.props.title()}
          </div>
          <Menu
            visible={this.props.isDrawer}
            className="sidebar-menu"
          >
            {this.props.children}
          </Menu>
        </div>
      </React.Fragment>
    )
  }
}

export default class Components extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDrawer: true,
      isPositionRelative: true
    }
  }
  renderTitle = () => {
    return (
      <Link to="/rc-components" className="rc__menubar__title">
        <span className="rc__menubar__img" ></span>
      </Link>
    )
  }
  renderRcomponent = (rcomponents) => {
    if (!rcomponents || rcomponents.length === 0) return 'empty Rcomponents';
    return (
      <ul className="rc__menubar">
        {
          rcomponents.map((rcomponent, index) => (
            <li key={index} className="rc__item">
              <Link to={rcomponent.path} >{rcomponent.name}</Link>
            </li>
          ))
        }
      </ul>
    )
  }

  render() {
    return (
      <React.Fragment>
        <div className="d-flex">
          <Sidebar
            title={this.renderTitle}
            isDrawer={this.state.isDrawer}
            toggleDrawer={() => {
              this.setState({
                isDrawer: this.state.isDrawer,
              })
            }}
          >
            {this.renderRcomponent(rcomponents)}
          </Sidebar>
          <div className="main d-flex flex-column flex-1">
            <div className="rc__header d-flex justify-content--between align-items--center">
              <span className="rc__header__fold">
                <FontAwesomeIcon
                  icon={faBars}
                  onClick={() => {
                    this.setState({
                      isDrawer: !this.state.isDrawer,
                    })
                  }}
                />
              </span>
            </div>
            <div className="rc__content">
              {this.props.children}
            </div>

            <Footer />
          </div>
        </div>
      </React.Fragment>
    )
  }
}
