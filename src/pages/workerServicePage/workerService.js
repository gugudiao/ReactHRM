import React from 'react';
import { Button, notification,Row,Col  } from 'antd';
import './index.less'
export default class workerService extends React.Component{
    render(){
        const openNotificationWithIcon = (type,data) => {
            notification[type]({
              message: data,
              description: '我是提示框',
            });
          };
        return (
            <div>
                    <Row className="container-slide">
                    slide
                    </Row>
                    <Row className="container-info">
                        <Col className='card-title' >个人信息</Col>
                        <Col  className='card-title' >工资单</Col>
                        <Col  className='card-title' >请假</Col>
                        <Col  className='card-title' >考核评分</Col>
                        <Col  className='card-title' >证明开具s</Col>
                        <Col  className='card-title right' >报销申请</Col>
                    </Row>
                    <Row className="container-info">
                        <Col className='card-title' >信息核实</Col>
                        <Col  className='card-title' >隐私保护</Col>
                        <Col  className='card-title' >医疗保障</Col>
                        <Col  className='card-title' >年金</Col>
                        <Col  className='card-title' >入党申请</Col>
                        <Col  className='card-title' >因私出境</Col>
                        <Col  className='card-title' >出差</Col>
                        <Col  className='card-title' >我的协议</Col>
                        <Col  className='card-title right' >全部服务</Col>
                    </Row>
                    <Row className="container-info">
                        <Col className='card-title tipes' >信息核实</Col>
                        <Col  className='card-title tipes right' >全部服务</Col>
                    </Row>
            </div>
        );
    }
}