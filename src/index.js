import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react'
import './index.css';
import Header from './Header'
import Content from './Content'
// import App from './App';
import * as serviceWorker from './serviceWorker';

function createStore(reducer) {
    let state=null;
    let listeners=[]
    let subScribe=(listener)=>listeners.push(listener);
    let getState=() => state;
    let dispatch=((action)=>{
        state=reducer(state,action);
        listeners.forEach(listener => {listener()});
    });
    dispatch({});
    return {getState,dispatch,subScribe};
}

function themeReducer(state,action) {
    if (!state) {
        return {themeColor:'red'}
    }
    switch (action.type) {
        case 'CHANGE_COLOR':         
            return {...state,themeColor:action.themeColor};
        default:
            return state;
    }
}

const store = createStore(themeReducer)


class Index extends Component{
    render() {
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        );
    }
}


ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
