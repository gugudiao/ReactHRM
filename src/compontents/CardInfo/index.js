import React from 'react';
import { Button, notification,Row,Col,Carousel,Icon  } from 'antd';
import './index.less';

export default  class CardInfo extends React.Component{
    render(){

        return (
            <div>
            <Row className="container-info">
                 <Col className='card-title'style={{background:'#2a5caa'}} >
                                <div className='card-l'>
                                <Icon type="user"  className='card-ico' />
                                </div>
                                <div className='card-r'>
                                   <h2 className='card-i-title'>个人信息</h2> 
                                   <p>修改个人信息、下载个人简历</p>
                                </div>
                        </Col>
                        <Col  className='card-title' style={{background:'#f47920'}}>
                          <div className='card-l'>
                                <Icon type="money-collect"  className='card-ico' />
                                </div>
                                <div className='card-r'>
                                   <h2 className='card-i-title'>工资单</h2> 
                                   <p>工资单，个人所得税，收入。。。</p>
                                </div>
                        
                        </Col>
                        <Col  className='card-title' style={{background:'#f8aba6'}}>
                          <div className='card-l'>
                                <Icon  type="security-scan"   className='card-ico' />
                                </div>
                                <div className='card-r'>
                                   <h2 className='card-i-title'>请假</h2> 
                                   <p>请假申请</p>
                                </div>
                        
                        </Col>
                        <Col  className='card-title' style={{background:'green'}}>
                          <div className='card-l'>
                                <Icon  type="safety-certificate"  className='card-ico' />
                                </div>
                                <div className='card-r'>
                                   <h2 className='card-i-title'>考核评分</h2> 
                                   <p>考核评分</p>
                                </div>
                        
                        </Col>
                        <Col  className='card-title' style={{background:'#694d9f'}}>
                          <div className='card-l'>
                                <Icon   type="robot"    className='card-ico' />
                                </div>
                                <div className='card-r'>
                                   <h2 className='card-i-title'>证明开具</h2> 
                                   <p>证明开具</p>
                                </div>
                        </Col>
                        <Col  className='card-title right' style={{background:'#f3715c'}}>
                          <div className='card-l'>
                                <Icon  type="dollar"  className='card-ico' />
                                </div>
                                <div className='card-r'>
                                   <h2 className='card-i-title'>报销申请</h2> 
                                   <p>证明开具</p>
                                </div>
                        </Col>
                </Row>
                <Row className="container-info all-info-card">
                        <Col className='card-title' >
                            <div>
                            <Icon  type="crown" style={{color:'green',fontSize:'50px'}}></Icon>
                                <p>信息核实</p>
                            </div>
                        </Col>
                        <Col  className='card-title' >
                            <div>
                                <Icon  type="dollar" style={{color:'#f3715c',fontSize:'50px'}}></Icon>
                                <p>隐私保护</p>
                            </div>
                        </Col>
                        <Col  className='card-title' >
                            <div>
                            <Icon  type="cluster"  style={{color:'yellow',fontSize:'50px'}}></Icon>
                                <p>医疗保障</p>
                            </div>
                        </Col>
                        <Col  className='card-title' >
                            <div>
                            <Icon   type="experiment"  style={{color:'#fcaf17',fontSize:'50px'}}></Icon>
                                <p>年金</p>
                            </div>
                        </Col>
                        <Col  className='card-title' >
                            <div>
                                <Icon  type="dollar" style={{color:'#f3715c',fontSize:'50px'}}></Icon>
                                <p>入党申请</p>
                            </div>
                        </Col>
                        <Col  className='card-title' >
                             <div>
                                <Icon  type="dollar" style={{color:'#f3715c',fontSize:'50px'}}></Icon>
                                <p>因私出境</p>
                            </div>
                        </Col>
                        <Col  className='card-title' >
                            <div>
                                <Icon   type="experiment"  style={{color:'#fcaf17',fontSize:'50px'}}></Icon>
                                <p>出差</p>
                            </div>
                        </Col>
                        <Col  className='card-title' >
                            <div>
                                <Icon  type="crown" style={{color:'green',fontSize:'50px'}}></Icon>
                                <p>我的协议</p>
                            </div>
                        </Col>
                        <Col  className='card-title right' >
                            <div>
                                <Icon  type="cluster"  style={{color:'yellow',fontSize:'50px'}}></Icon>
                                <p>全部服务</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="container-info">
                        <Col className='card-title tipes' >通知公告</Col>
                        <Col  className='card-title tipes right' >政策制度</Col>
                    </Row>
            </div>
        )
    }
}