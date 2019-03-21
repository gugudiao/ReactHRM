import React from 'react';
import {Layout,Card, Menu, Breadcrumb} from'antd';
import './index.less';
const Header = Layout.Header;
const {Footer,Sider,Content} = Layout;

export default class Layoutmain extends React.Component{
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
                            <Menu.Item key="1">员工服务</Menu.Item>
                            <Menu.Item key="2">智慧管理</Menu.Item>
                            <Menu.Item key="3">业务处理</Menu.Item>
                        </Menu>
                        </Header>
                        <Content style={{ padding: '30px 50px 0px 50px' }}>
                            <div style={{ background: '#fff', padding: 24, minHeight: 800 }}>Content</div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            中国工商银行版权所有                                                                        
                        </Footer>
                    </Layout>
            </div>
        );
    }
}