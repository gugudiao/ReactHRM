import React from 'react';
import {Layout} from'antd';
import {withRouter} from 'react-router-dom';
import './index.less';
import Root from './../../router/Routes';
import HeaderRoute from './../../compontents/HeaderRoute'
import { connect } from 'react-redux';
import { switchMenuTheme } from './../../redux/actions/themeAction'
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
                        <Footer style={{ textAlign: 'center' , position:"fixed",color:this.props.contentColor}}>
                            中国工商银行版权所有                                                                        
                        </Footer>
                    </Layout>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        menuName: state.menuName,
        contentColor: state.contentColor
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        onSwitchColor:(menuName)=>{
            dispatch(switchMenuTheme(menuName));
        }
    }
}

//export default withRouter(Layoutmain);
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Layoutmain));