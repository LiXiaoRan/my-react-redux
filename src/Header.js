import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "./react-redux"



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
    
    // componentWillMount(){
    //     let {store}=this.context;
    //     this._updateThemeColor();
    //     store.subScribe(()=>{this._updateThemeColor()})

    // }

    // _updateThemeColor(){
    //     let {store}=this.context;
    //     let state=store.getState();
    //     this.setState({themeColor:state.themeColor});
    // }

    render() {
        return (
            <div>
                  <h1 style={{color:this.props.themeColor}}>React.js 小书 header</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

Header=connect(mapStateToProps)(Header);

export default Header