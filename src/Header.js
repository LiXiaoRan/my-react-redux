import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component{
    static contextTypes={
        store:PropTypes.object
    }

    constructor(props) {
        super(props);
        this.state={
            themeColor:''
        }
    }
    
    componentWillMount(){
        this._updateThemeColor();
    }

    _updateThemeColor(){
        let {store}=this.context;
        let state=store.getState();
        this.setState({themeColor:state.themeColor})
    }

    render() {
        return (
            <div>
                  <h1 style={{color:this.state.themeColor}}>React.js 小书</h1>
            </div>
        );
    }
}

export default Header