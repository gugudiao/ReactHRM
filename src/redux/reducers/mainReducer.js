import { combineReducers } from 'redux';
import { type } from '../actions/themeAction';

const contentTheme = (state,action) => {
    switch(action.type){
        case type.SWITCH_MENU_THEME:
            console.log(state);
            console.log(action);
            let color = "";
            if(action.menuName === '员工服务'){
                color = "red";
            }else if(action.menuName === '智慧管理'){
                color = 'green';
            }else{
                color = 'blue'
            }
            console.log(color);
            return {
                ...state,
                menuName:action.menuName,
                contentColor: color
            };
        default:
            return {...state};
    }
};

export default contentTheme;