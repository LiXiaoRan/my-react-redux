import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
import { connect } from "./react-redux"

class Content extends Component{
     static contextTypes = {
        store: PropTypes.object
     }


    constructor() {
        super()
        this.state={
            themeColor:''
        }
    }

    // componentWillMount(){
    //     let {store}=this.context;
    //     this._updateThemeColor()
    //     store.subScribe(()=>{this._updateThemeColor()})

    // }

    // _updateThemeColor(){
    //     let {store}=this.context;
    //     let state=store.getState();
    //     this.setState({themeColor:state.themeColor})       
    // }


    render() {
        return (
            <div>
                <p style={{color:this.props.themeColor}} >React.js 小书内容 content</p>
                <ThemeSwitch />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

Content = connect(mapStateToProps)(Content);

export default  Content