import React from 'react';
export default class smartManage extends React.Component{
    
 onChange =(date, dateString)=> {
    console.log(date, dateString);
  }
    render(){
        return (
            <div>
                <h2>智慧管理</h2> 
            </div>
        );
    }
}