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
                 <DatePicker style={{'marginBottom':'20px'}} onChange={this.onChange} />
                <br />
                <MonthPicker style={{'marginBottom':'20px'}}  onChange={this.onChange} placeholder="Select month" />
                <br />
                <RangePicker style={{'marginBottom':'20px'}}  onChange={this.onChange} />
                <br />
                <WeekPicker style={{'marginBottom':'20px'}}  onChange={this.onChange} placeholder="Select week" />
            </div>
        );
    }
}