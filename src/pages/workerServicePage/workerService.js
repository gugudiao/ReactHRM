import React from 'react';
import { Button, notification } from 'antd';
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
                <h2>员工服务</h2>
                <Button style={{"width":"100px",display:'block',margin:"0 auto","marginBottom":"20px"}} onClick={() => openNotificationWithIcon('success',"成功提示")}>点我Success</Button>
                <br/>
                <Button style={{"width":"100px",display:'block',margin:"0 auto","marginBottom":"20px"}} onClick={() => openNotificationWithIcon('info',"Info提示")}>点我Info</Button>
                <br/>
                <Button style={{"width":"100px",display:'block',margin:"0 auto","marginBottom":"20px"}} onClick={() => openNotificationWithIcon('warning',"warning提示")}>点我Warning</Button>
                <br/>
                <Button style={{"width":"100px",display:'block',margin:"0 auto","marginBottom":"20px"}} onClick={() => openNotificationWithIcon('error',"error提示")}>点我Error</Button>
            </div>
        );
    }
}