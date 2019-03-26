import React from 'react';
import { Row,Col,Icon  } from 'antd';
import './index.less';

export default  class CardInfoItem extends React.Component{
    state = {
        Dom: '',
      }
    render(){
        
    //判斷是左右布局还是上下布局
        if(this.props.type === 'left-right'){
            return (
        <Col className={this.props.classBox} onClick={this.props.onClick}  style={{background:this.props.background}} >
                <div className='card-l'>
                <Icon type={this.props.logoType?this.props.logoType:'user'}  className='card-ico' />
                </div>
                <div className='card-r'>
                <h2 className='card-i-title'>{this.props.title}</h2> 
                <p>{this.props.content}</p>
                </div>
            </Col>
            )
        }else{
            return (
            <Col className='card-title' >
                <div>
                <Icon  type="crown" style={{color:'green',fontSize:'50px'}}></Icon>
                    <p>{this.props.title}</p>
                </div>
            </Col>
            )
        }
    }
}