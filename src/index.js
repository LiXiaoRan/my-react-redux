import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react'
import './index.css';
import Header from './containers/Header'
import Content from './containers/Content'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


// import App from './App';
import * as serviceWorker from './serviceWorker';


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


ReactDOM.render(<Provider store={store}><Index/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
