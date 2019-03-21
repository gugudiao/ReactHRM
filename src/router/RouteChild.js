/*
   App 应用总容器
*/
import React, { Component } from 'react';
 
class RouteChild extends Component {
    render() {
        return <div>{this.props.children}</div>;
    }
}
export default RouteChild;