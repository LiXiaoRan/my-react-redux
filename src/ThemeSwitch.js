import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ThemeSwitch extends Component{
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
        let {store}=this.context;
        this._updateThemeColor();
        store.subScribe(()=>{this._updateThemeColor()})

    }

    _updateThemeColor(){
        let {store}=this.context;
        let state=store.getState();
        this.setState({themeColor:state.themeColor});
    }


    handleSwitchColor(color){
        let {store}=this.context;
        store.dispatch({type:'CHANGE_COLOR',themeColor:color})
    }

    render() {
        return (
            <div>
                <button onClick={this.handleSwitchColor.bind(this,'red')} style={{color:this.state.themeColor}}>Red</button>
                <button onClick={this.handleSwitchColor.bind(this,'blue')} style={{color:this.state.themeColor}}>Blue</button>
            </div>
        );
    }
}

export default ThemeSwitch