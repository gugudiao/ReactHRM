import React from 'react';
import {Layout} from'antd';
import {withRouter} from 'react-router-dom';
import './index.less';
import Root from './../../router/Routes';
import HeaderRoute from './../../components/HeaderRoute'
import { connect } from 'react-redux';
const Header = Layout.Header;
const {Footer,Content} = Layout;

 class Layoutmain extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            display_name: 'none', //此状态机为display的取值
            display_old: 'block',
            display_page: '/',
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(displayState){
        this.setState({
            display_name : displayState.display_name,
            display_old : displayState.display_old,
            display_page : displayState.display_page,
        });
        //alert(displayState.display_name);
    }    
    render(){

        return (
            <div> 
                    <Layout className="layout">
                        <Header>
                            <HeaderRoute getStates={this.handleClick.bind(this)}/>
                        </Header>
                        <Content style={{ padding: '30px 50px 0px 50px','marginBottom':'85px' }}>
                            <div style={{ background: '#fff', padding: 24, minHeight: 800, display:this.state.display_old,'borderRadius':'5px' }}>
                                <Root />
                            </div>
                            <iframe title='testIframe' id="content" style={{ background: '#fff', padding: 24, minHeight: 800,'width':'100%',border:0, display:this.state.display_name,'borderRadius':'5px' }} src={this.state.display_page}>
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

    }
}

//export default withRouter(Layoutmain);
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Layoutmain));