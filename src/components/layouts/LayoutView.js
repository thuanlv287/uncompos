import React, { Component } from 'react';
import { MenuBar, Header, Footer } from '../layouts';

class LayoutView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDrawer: true,
            isPositionRelative: true
        }
    }
    toggleBar = () => {
        this.setState({
            isDrawer: !this.state.isDrawer,
        })
    }
    render() {
        return (
            <div className="d-flex">
                <MenuBar
                    isDrawer={this.state.isDrawer}
                    isPositionRelative={this.state.isPositionRelative}
                />
                <div className="main d-flex flex-column flex-1">
                    <Header
                        toggleBar={this.toggleBar}
                    />
                    <div className="content">
                        {this.props.children}
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}
export default LayoutView