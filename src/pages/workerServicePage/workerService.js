import React from 'react';
import './index.less'
import CardInfo from './../../compontents/CardInfo';
import LanternSlide from './../../compontents/LanternSlide';
export default class workerService extends React.Component{
    render(){
      
        
        return (
            <div>
                <LanternSlide/>
                 <CardInfo/>
                    
            </div>
        );
    }
}