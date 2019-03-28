import React from 'react';
import {Row,Carousel} from 'antd';
import lanterSlideStyle from'./index.less';

export default  class LanternSlide extends React.Component{
    render(){
        const onChange=(a, b, c)=> {
          }
        return (
            <div>
                <Row className={lanterSlideStyle['container-slide']}>
                    <Carousel afterChange={onChange} autoplay={false}>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                    </Carousel>
                    </Row>
            </div>
        )
    }
}