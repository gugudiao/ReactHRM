import React from 'react';
import { Button, notification,Row,Col,Carousel,Icon  } from 'antd';
import './index.less';

export default  class LanternSlide extends React.Component{
    render(){
        const onChange=(a, b, c)=> {
            console.log(a, b, c);
          }
        return (
            <div>
                <Row className="container-slide">
                    <Carousel afterChange={onChange} autoplay={true}>
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel>
                    </Row>
            </div>
        )
    }
}