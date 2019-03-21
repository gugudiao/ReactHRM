import React from 'react';
import { DatePicker } from 'antd';


const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
export default class smartManage extends React.Component{
    
 onChange =(date, dateString)=> {
    console.log(date, dateString);
  }
    render(){
        return (
            <div>
                <h2>智慧管理</h2> 
                 <DatePicker onChange={onChange} />
                <br />
                <MonthPicker onChange={onChange} placeholder="Select month" />
                <br />
                <RangePicker onChange={onChange} />
                <br />
                <WeekPicker onChange={onChange} placeholder="Select week" />
            </div>
        );
    }
}