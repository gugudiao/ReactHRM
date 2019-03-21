import React, { Component } from 'react';

class SayHi extends React.Component {
    constructor(props,context){
      //构造函数 初始化
      super(props,context) //必须要写，否则this指向会出问题
      console.log("constructor 构造函数",props,context,"\n  数据单向传输，需要手动更新state \n  不允许直接将props直接赋值给state")
      this.state = JSON.parse(JSON.stringify(props));
    }
    render(options){
      console.log('render','返回组件模板',options);
        return <p>Hi, {this.props.context}!</p>
    }
    componentDidMount(options){
      console.log("componentDidMount","渲染完毕",options,"\n  组件请求在该处发起，不允许在构造函数发起请求,否则容易造成组件渲染异常");
    }
    componentWillReceiveProps(options){
      console.log("componentWillReceiveProps","props参数发生改变",options,"\n  数据单向传输，需要手动更新state \n  不允许直接将props直接赋值给state");
    }
    shouldComponentUpdate(props){
      console.log("shouldComponentUpdate state遭到改变 此次决定是否重新渲染组件",props,"\n  改变参数后触发，可以获取到参数\n  在获取到参数后最好与原有参数进行比对，有更新才进行页面渲染 \n  是否渲染由该函数的返回值决定 true/false");
      let boo = false;
      for(let i in this.state){
        if(this.state[i] !== props[i]){
          console.log("props : " + i + " is change,page will be re-render");
          boo = true;
        }
      }
      return boo;
    }
    componentWillUpdate(options){
      console.log("componentWillUpdate",'组件即将重新渲染',options);
    }
    componentDidUpdate(options){
      console.log("componentDidUpdate",'组件重新渲染完毕',options);
    }
    componentWillUnmount(options){
      console.log("componentWillUnmount","组件即将被清除",options,"\n  在此处需要释放掉组件内所有未关闭操作，否则会影响性能");
    }
    
  }
  
  // React生命周期有三个阶段
  //  挂载阶段 生命周期钩子函数
   
  //  constructor:状态初始化
   
  //  componentWillMount:通知函数,状态初始化完毕,可以开始渲染(在v17.0会被废弃)
   
  //  render:渲染函数,进行组件渲染
   
  //  componentDidMount:通知函数,初始化渲染完毕,可以发送ajax请求数据
  
  //  运行阶段(所有函数调用次数>=0)
   
  //  componentWillReceiveProps:自定义属性发生变化
   
  //  shouldComponentUpdate:是否允许组件渲染
   
  //  componentWillUpdate:通知函数 组件将要更新
   
  //  render:渲染函数
   
  //  componentDidUpdate:通知函数 之间更新完毕
  
  //  销毁阶段
   
  //  componentWillUnmouent:卸载前的最后一次通知(资源回收)
   
  //  3个最重要的钩子函数
   
  //  constructor 定义状态
   
  //  componentDidMount  初始化ajax
   
  //  componentWillUnmouent  卸载组件,回收资源,比如定时器
  
  export default SayHi;