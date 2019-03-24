import React from 'react';
import { Button, notification,Row,Col,Carousel,Icon  } from 'antd';
import './index.less'
import CardInfo from './../../compontents/CardInfo';
import LanternSlide from './../../compontents/LanternSlide';
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
                <LanternSlide/>
                 <CardInfo/>
                    
            </div>
        );
    }
}