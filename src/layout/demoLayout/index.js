import React from 'react';
import {Layout} from'antd';
import {withRouter} from 'react-router-dom';
import './index.less';
import Root from './../../router/Routes';
import HeaderRoute from './../../compontents/HeaderRoute'
const Header = Layout.Header;
const {Footer,Content} = Layout;

 class Layoutmain extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            display_name: 'none', //此状态机为display的取值
            display_old: 'block',
        }
    }

   
  
    render(){

        return (
            <div> 
                    <Layout className="layout">
                        <Header>
                            <HeaderRoute/>
                        </Header>
                        <Content style={{ padding: '30px 50px 0px 50px','marginBottom':'85px' }}>
                            <div style={{ background: '#fff', padding: 24, minHeight: 800, display:this.state.display_old,'borderRadius':'5px' }}>
                            
                                <Root />
                            </div>
                            <iframe title='testIframe' id="content" style={{ background: '#fff', padding: 24, minHeight: 800, display:this.state.display_name }}>
                            </iframe>
                        </Content>
                        <Footer style={{ textAlign: 'center',"position":'fixed' }}>
                            中国工商银行版权所有                                                                        
                        </Footer>
                    </Layout>
            </div>
        );
    }
}
export default withRouter(Layoutmain);