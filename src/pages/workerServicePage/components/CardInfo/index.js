import React from 'react';
import { Row,Col,Icon  } from 'antd';
import CardInfoStyle from './index.less';
import CardInfoItem from './../../../../components/CardInfoItem';
import { join } from 'path';
export default  class CardInfo extends React.Component{
    /**
     * 组件参数
     * type  左右布局left-right 上下布局 top-bottom
     * onClick 每个card点击事件
     * classBox 最外层的样式名
     * content 内容
     * title 标题
     * background  外边框的样式颜色
     * logoType 图标的类型 
     * other todo 想添加prop可以自行添加 然后在组里面获取
     * 
     * 注意 最右边加个外边框加个下面的样式
     * mg-rg-10 margin-right:0;
     * 
     */
    userInfo =()=>{
       console.log('我是人员信息Card');
    }
    render(){
        
    console.log(CardInfoStyle)
        return (
            <div>
            <Row className={CardInfoStyle['container-info']}>
                        <CardInfoItem type='left-right' onClick = {this.userInfo} classBox='card-title' content='修改个人信息、下载个人简历'  background='#2a5caa' logoType='user' title='个人信息'/>
                        <CardInfoItem type='left-right'  classBox='card-title' content='工资单，个人所得税，收入。'  background='#f47920' logoType='money-collect' title='工资单'/>
                        <CardInfoItem type='left-right'  classBox='card-title' content='请假申请'  background='#f8aba6' logoType='security-scan' title='请假'/>
                        <CardInfoItem type='left-right'  classBox='card-title' 
                        content='考核评分'  background='green' logoType='safety-certificate' title='考核评分'/>
                        <CardInfoItem classBox='card-title' 
                        content='证明开具' type='left-right'   background='#694d9f' logoType='robot' title='证明开具'/>
                       <CardInfoItem   type='left-right'  classBox='card-title' 
                        content='报销申请'  background='#f3715c' logoType='dollar' title='报销申请'/>
                </Row>
                <Row className={[CardInfoStyle['container-info'], CardInfoStyle['container-info-two']].join(' ')}>
                         <CardInfoItem type='top-bottom' classBox='card-title' 
                        content='信息核实'  classIco='comm-ioc green'  logoType='crown' title='信息核实'/>
                        
                        <CardInfoItem type='top-bottom'  classBox='card-title' 
                        content='隐私保护'  classIco='comm-ioc green'  logoType='crown' title='隐私保护'/>
                        <CardInfoItem type='top-bottom'  classBox='card-title' 
                        content='医疗保障'  classIco='comm-ioc green'  logoType='crown' title='医疗保障'/>
                        
                        <CardInfoItem type='top-bottom'  classBox='card-title' 
                        content='年金'  classIco='comm-ioc green'  logoType='crown' title='年金'/>
                        <CardInfoItem type='top-bottom'  classBox='card-title' 
                        content='入党申请'  classIco='comm-ioc green'  logoType='crown' title='入党申请'/>
                        
                        <CardInfoItem type='top-bottom'  classBox='card-title' 
                        content='因私出境'  classIco='comm-ioc green'  logoType='crown' title='因私出境'/>
                        <CardInfoItem type='top-bottom'  classBox='card-title' 
                        content='出差'  classIco='comm-ioc green'  logoType='crown' title='出差'/>
                        
                        <CardInfoItem type='top-bottom'  classBox='card-title' 
                        content='我的协议'  classIco='comm-ioc green'  logoType='crown' title='我的协议'/>

                        <CardInfoItem  type='top-bottom' classBox='card-title'  
                        content='全部服务'  classIco='comm-ioc green'  logoType='crown' title='全部服务'/>
                    </Row>
                    <Row className={CardInfoStyle['container-info']}>
                        <Col className=  {CardInfoStyle['tipes-center']} >通知公告</Col>
                        <Col className= {[CardInfoStyle['tipes-center'], CardInfoStyle['mg-rg-10']].join(' ')}>政策制度</Col>
                    </Row>
            </div>
        )
    }
}