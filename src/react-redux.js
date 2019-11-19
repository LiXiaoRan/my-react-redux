import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const connect = (mapStateToProps) =>(WrappedComponent) => {
    class Connect extends Component {
      static contextTypes = {
        store: PropTypes.object
      }

      constructor(props) {
        super(props);
        this.state={
          allProps:{}
        }
      }
      
      
      componentWillMount(){
        let {store}=this.context;
        this._updateProps();
        store.subScribe(()=>{this._updateProps()})

    }

    _updateProps(){
        let {store}=this.context;
        let stateProps=mapStateToProps(store.getState(),this.props);// 额外传入 props，让获取数据更加灵活方便(不能让被包裹的组件原本的props没了)
        this.setState({
          allProps:{// 整合普通的 props 和从 state 生成的 props
            ...stateProps,
            ...this.props
          }
        })
    }

      render () {
        //从 store 取数据
        // const {store}=this.context;
        // let stateProps=mapStateToProps(store.getState());
        // {...stateProps} 意思是把这个对象里面的属性全部通过 `props` 方式传递进去
        return <WrappedComponent {...this.state.allProps}/>
      }
    }
  
    return Connect
  }