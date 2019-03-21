import React, { Component } from 'react';
import './index.css';
import SayHi from './compontents/hook'
class Demo_hook extends Component {
  constructor(props,context){
    //构造函数 初始化
    super(props,context) //必须要写，否则this指向会出问题
    this.state = {
      context:'Year_Liu',
      dontChange:'test1',
      onShow:true,
    }
  }
  render() {
    return (
      <div className="demo_hook" onClick={this.click_test}>
        <header className="demo_hook-header">
          <p>
            Edit <code>src/demo_hook.js</code> and save to reload.
          </p>
          {this.state.onShow?(<SayHi context={this.state.context} dontChange={this.state.dontChange}/>):''}
          {
            this.state.onShow?(
              <div onClick={this.show_change}>清除</div>
            ):(
              <div onClick={this.show_change}>显示</div>
            )
          }
          <a
            className="demo_hook-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  };
  shouldComponentUpdate(props){
    console.log("shouldComponentUpdate");
    return true;
  }
  show_change = (e)=>{
    this.setState((prevState,props)=>({
      onShow:!prevState.onShow
    }))
    e.preventDefault();//阻止默认事件
    e.stopPropagation();//阻止事件冒泡 
  }
  click_test = (e)=>{
    this.setState({
      context:'Hello World'
    })
  }
}

export default Demo_hook;
