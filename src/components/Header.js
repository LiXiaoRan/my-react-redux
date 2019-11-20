import React, { Component } from 'react'
import PropTypes from 'prop-types'

//Dumb版本的Header
export default class extends Component{
    
    static propTypes={
        themeColor:PropTypes.string
    }

    render() {
        return (
            <div>
                <h1 style={{color:this.props.themeColor}}>React.js 小书</h1>
            </div>
        );
    }
}