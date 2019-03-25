import React from 'react';
import {Layout,Card, Menu, Breadcrumb} from'antd';
import { Link, NavLink, BrowserRouter as Router} from 'react-router-dom';
import './index.less';
import Root from './../../router/Routes';
import {withRouter} from 'react-router-dom';
const Header = Layout.Header;
const {Footer,Sider,Content} = Layout;

 class Layoutmain extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            display_name: 'none', //此状态机为display的取值
            display_old: 'block',
        }
    }
    display_name() { //编辑按钮的单击事件，修改状态机display_name的取值
        if (this.state.display_name == 'none') {
            this.setState({
                display_name: 'block',
                display_old: 'none',
            })
        }
    }
    handle=()=>{
        
        if (this.state.display_name == 'block') {
            this.setState({
                display_name: 'none',
                display_old: 'block',
            })      
      }
    }
    render(){

        return (
            <div> 
                    <Layout className="layout">
                        <Header>
                            <div className="logo" >
                                ICBC人力资源管理系统
                            </div>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '38px' }}
                        >
                            <Menu.Item key="1"><Link to={{ pathname: '/workerService'}} onClick={this.handle}>员工服务</Link></Menu.Item>
                            <Menu.Item key="2"><Link to={{ pathname: '/smartManage'}} onClick={this.handle}>智慧管理</Link></Menu.Item>
                            <Menu.Item key="3"><Link to={{ pathname: '/workDo'}} onClick={this.handle}>业务处理</Link></Menu.Item>
                            <Menu.Item key="4"><a href="/test.html" target="content" onClick={this.display_name.bind(this)}>test page</a></Menu.Item>
                        </Menu>
                        </Header>
                        <Content style={{ padding: '30px 50px 0px 50px' }}>
                            <div style={{ background: '#fff', padding: 24, minHeight: 800, display:this.state.display_old }}>
                            
                                <Root />
                            </div>
                            <iframe id="content" style={{ background: '#fff', padding: 24, minHeight: 800, display:this.state.display_name }}>
                            </iframe>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            中国工商银行版权所有                                                                        
                        </Footer>
                    </Layout>
            </div>
        );
    }
}
export default withRouter(Layoutmain);