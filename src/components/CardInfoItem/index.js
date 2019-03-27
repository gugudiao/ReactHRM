import React from 'react';
import { Row,Col,Icon  } from 'antd';
import CardInfoItemStyle from './index.less';

export default  class CardInfoItem extends React.Component{
    state = {
        Dom: '',
      }
    render(){
        console.log(this.props.classBox1)
    //判斷是左右布局还是上下布局
        if(this.props.type === 'left-right'){
            return (
        <Col className={!this.props.classBox1? CardInfoItemStyle[this.props.classBox]:[CardInfoItemStyle[this.props.classBox],CardInfoItemStyle[this.props.classBox1]].join(' ')} onClick={this.props.onClick}  style={{background:this.props.background}} >
                <div className={CardInfoItemStyle['card-l']} >
                <Icon type={this.props.logoType?this.props.logoType:'user'} className={CardInfoItemStyle['card-ico']} />
                </div>
                <div className={CardInfoItemStyle['card-r']} >
                <h2 className={CardInfoItemStyle['card-i-title']} >{this.props.title}</h2> 
                <p>{this.props.content}</p>
                </div>
            </Col>
            )
        }else{
            return (
            <Col className={!this.props.classBox1? [CardInfoItemStyle[this.props.classBox],CardInfoItemStyle['o-card']].join(" "):[CardInfoItemStyle[this.props.classBox],CardInfoItemStyle['o-card'],CardInfoItemStyle[this.props.classBox1]].join(" ")}>
                <div>
                <Icon  type="crown" style={{color:'green',fontSize:'50px'}}></Icon>
                    <p style={{color:'#000',fontSize:18}}>{this.props.title}</p>
                </div>
            </Col>
            )
        }
    }
}