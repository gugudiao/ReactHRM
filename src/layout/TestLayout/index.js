import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import { Route, Switch, Link } from 'react-router-dom';

import styles from './index.less'
import Carousel from '@pages/TestPage/AntComponents/Carousel'
import Form from '@pages/TestPage/AntComponents/Form'

const { Content, Sider  } = Layout;
const SubMenu = Menu.SubMenu;

class TestLayout extends Component {

  render() {
    console.log(styles);
    return (
      <Layout>
        {/* 左侧菜单 */}
          <Sider className={styles.sider}>
              <Menu theme="dark" mode="inline">
                  <SubMenu key="sub1" title="ant组件">
                      <Menu.Item key="1">
                        <Link to={`${this.props.match.path}/carousel`}>轮播图</Link>
                      </Menu.Item>
                      <Menu.Item key="2">
                        <Link to={`${this.props.match.path}/form`}>表单</Link>
                      </Menu.Item>
                  </SubMenu>
              </Menu>
          </Sider>
          {/* 右测内容页 */}
          <Content style={{ padding: "10px"}}>
              <Switch>
                <Route path={`${this.props.match.path}/carousel`} component={Carousel}></Route>
                <Route path={`${this.props.match.path}/form`} component={Form}></Route>
              </Switch>
          </Content>
      </Layout>
    )
  }
  
}

export default TestLayout