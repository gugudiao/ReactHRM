import React from 'react';
import PropTypes from 'prop-types';
import {Layout} from'antd';
import {withRouter} from 'react-router-dom';
import indexStyle from'./index.less';
import Root from '../../router';
import HeaderRoute from './../../components/HeaderRoute'
import { connect } from 'react-redux';
const Header = Layout.Header;
const {Footer,Content} = Layout;

 class Layoutmain extends React.Component{

    static propTypes = {
        menuName:PropTypes.string,
        contentColor:PropTypes.string
    }

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
                        <Header className={indexStyle['layout-head']}>
                            <HeaderRoute getStates={this.handleClick.bind(this)}/>
                        </Header>
                        <Content  style={{ padding: '64px 0px 0px 24px','marginBottom':'72px',display:'flex' }}>
                            <div  className={indexStyle['content-left']}>
                                <div style={{ minHeight: 800, display:this.state.display_old,'borderRadius':'5px' }}>
                                <Root />
                                </div>
                                <iframe title='testIframe' id="content" style={{ marginTop:50,background: '#fff', padding: 24, minHeight: 800,'width':'100%',border:0, display:this.state.display_name,'borderRadius':'5px' }} src={this.state.display_page}>
                                </iframe>
                            </div>
                            <div className={indexStyle['content-right']} >
                            <div className={indexStyle['my-remind']}>我的提醒</div>
                            <div className={indexStyle['my-remind']}>我的待办</div>
                            <div className={indexStyle['my-remind']}>日历</div>
                            </div>
                        </Content>
                        <Footer style={{background: '#dde0f5',left:24,right:24,bottom:0,height:48, textAlign: 'center' , position:"fixed",color:'#68647a'}}>
                        {/*this.props.contentColor*/}
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