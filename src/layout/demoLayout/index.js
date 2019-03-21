import React from 'react';
import {Layout,Card, Menu, Breadcrumb} from'antd';
import { Link, NavLink, BrowserRouter as Router} from 'react-router-dom';
import './index.less';
import Root from './../../router/Routes';
import {withRouter} from 'react-router-dom';
const Header = Layout.Header;
const {Footer,Sider,Content} = Layout;

 class Layoutmain extends React.Component{
    render(){

        return (
<<<<<<< HEAD
                <div>
                    <Router>
                        <Layout className="layout">
                            <Header className='layout-head'>
                                <div className="logo" >
                                    ICBC人力资源管理系统
                                </div>
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={[this.props.history.location.pathname]}
                                style={{ lineHeight: '38px' }}
                            >
                                <Menu.Item key="/workerService"><Link to={{ pathname: '/workerService'}}>员工服务</Link></Menu.Item>
                                <Menu.Item key="/smartManage"><Link to={{ pathname: '/smartManage'}}>智慧管理</Link></Menu.Item>
                                <Menu.Item key="/workDo"><Link to={{ pathname: '/workDo'}}>业务处理</Link></Menu.Item>
                            </Menu>
                            </Header>
                            <Content className="content">
                                <div className="content-root">
                                
                                    <Root />
                                </div>
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>
                                中国工商银行版权所有                                                                        
                            </Footer>
                        </Layout>
                    </Router>
=======
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
                            <Menu.Item key="1"><Link to={{ pathname: '/workerService'}}>员工服务</Link></Menu.Item>
                            <Menu.Item key="2"><Link to={{ pathname: '/smartManage'}}>智慧管理</Link></Menu.Item>
                            <Menu.Item key="3"><Link to={{ pathname: '/workDo'}}>业务处理</Link></Menu.Item>
                        </Menu>
                        </Header>
                        <Content style={{ padding: '30px 50px 0px 50px' }}>
                            <div style={{ background: '#fff', padding: 24, minHeight: 800 }}>
                            
                                <Root />
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            中国工商银行版权所有                                                                        
                        </Footer>
                    </Layout>
>>>>>>> 309574d7f64a9e5c914e8f518a11d3028d15dc87
            </div>
        );
    }
}
export default withRouter(Layoutmain);