import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "./react-redux"



class Header extends Component {
    static propTypes = {
        themeColor: PropTypes.string,
    }

    render() {
        return (
            <div>
                <h1 style={{ color: this.props.themeColor }}>React.js 小书 header</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

Header = connect(mapStateToProps)(Header);

export default Header