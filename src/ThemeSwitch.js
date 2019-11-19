import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ThemeSwitch extends Component{
    static contextTypes={
        store:PropTypes.object
    }

    constructor(props) {
        super(props);
        this.state={
            
        }
    }
    
    render() {
        return (
            <div>
                <button>Red</button>
                <button>Blue</button>
            </div>
        );
    }
}

export default ThemeSwitch