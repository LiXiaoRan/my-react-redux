import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const connect = (mapStateToProps,mapDispatchToProps) =>(WrappedComponent) => {
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
        let stateProps=mapStateToProps?mapStateToProps(store.getState(),this.props):{};// 额外传入 props，让获取数据更加灵活方便(将（Connect组件）原本的props也传了过去)
        let dispatchProps=mapDispatchToProps?mapDispatchToProps(store.dispatch,this.props):{}; // 防止 mapDispatchToProps 没有传入 
        
        this.setState({
          allProps:{// 整合普通的 props 和从 state 生成的 props
            ...stateProps,
            ...dispatchProps,
            ...this.props            
          }
        })
    }

      render () {
        
        return <WrappedComponent {...this.state.allProps}/>
      }
    }
  
    return Connect
  }