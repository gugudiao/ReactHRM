import React from 'react';
import { Menu} from'antd';
import { Link , withRouter} from 'react-router-dom';
import './index.less';
class HeaderRoute extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            display_name: 'none', //此状态机为display的取值
            display_old: 'block',
        }
    }
    componentWillMount=()=>{
        console.log('当前路由信息',this.props.location)
    }
    display_name() { //编辑按钮的单击事件，修改状态机display_name的取值
        if (this.state.display_name === 'none') {
            this.setState({
                display_name: 'block',
                display_old: 'none',
            })
        }
    }
    handle=()=>{
    }
    render(){
        return(
            <div className='header-top' >
            
                <div className="logo">ICBC人力资源管理系统</div>
                <div className='head-route'>
                    <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                >
                    <Menu.Item key="1"><Link to={{ pathname: '/workerService'}} onClick={this.handle}>员工服务</Link></Menu.Item>
                    <Menu.Item key="2"><Link to={{ pathname: '/smartManage'}} onClick={this.handle}>智慧管理</Link></Menu.Item>
                    <Menu.Item key="3"><Link to={{ pathname: '/workDo'}} onClick={this.handle}>业务处理</Link></Menu.Item>
                    <Menu.Item key="4"><a href="/test.html" target="content" onClick={this.display_name.bind(this)}>test page</a></Menu.Item>
                    </Menu>
                </div>
                <div className='user-info'>user-info:张三</div>
            </div>
        )
    }
}
export default withRouter(HeaderRoute);