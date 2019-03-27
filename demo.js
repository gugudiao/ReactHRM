import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**组件类 */
class demo extends React.Component {

    /**静态方法（Prop类型校验、默认值） */
    static propTypes = {
        demoNumber:PropTypes.number,
        demoArray:PropTypes.array,
        demoString:PropTypes.string,
        demoBoolean:PropTypes.bool,
        demoFunction:PropTypes.func
    }

    static defaultProps = {
        demoNumber: 0,
        demoArray: [],
        demoString: '',
        demoBoolean: true
    }

    /**构造函数 */
    constructor(props){
        super(props);
        this.state = {
            demoNumber: 0, 
            demoArray: [],
            demoString: '',
            demoBoolean: true
        }
    }

    /**生命周期函数 */
    componentWillMount(){

    }

    componentDidMount(){

    }

    /**私有方法（以下划线开头） */
    _demoPrivateFunction = () =>{

    }

    /**各类事件（以handle开头） */
    handleDemoClick = () =>{

    }

    handleDemoChange = () =>{

    }

    /**render函数,从render抽离出来的方法以render开头 */
    renderFunction = ()=>{

    }

    render = ()=>{
        this.renderFunction();
        return (
            <div>
            </div>
        );
    }

}


/**redux相关方法（非必要） */
/**从store获取参数 */
const mapStateToProps = (state) => {
    return{
        demoNumber: state.demoNumber, 
        demoArray: state.demoArray,
        demoString: state.demoString,
        demoBoolean: state.demoBoolean
    }
}
/**触发action、reducer改变store */
const mapDispatchToProps = (dispatch)=>{
    return{
        demoFunction:(demoData)=>{
            /**demoAction为action对象构造方法，需从action引入*/
            //dispatch(demoAction(demoData));
        }
    }
}

/**导出方法 (以下为试用了connect的情况，一般情况下只要 export default demmo; 即可)*/
export default connect(mapStateToProps,mapDispatchToProps)(demo);
