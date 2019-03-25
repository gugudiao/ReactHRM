import React from 'react';
import './index.less'
import CardInfo from './../../components/CardInfo';
import LanternSlide from './../../components/LanternSlide';
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