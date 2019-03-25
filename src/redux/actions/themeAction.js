export const type = {
    SWITCH_MENU_THEME:'SWITCH_MENU_THEME'
}

export function switchMenuTheme(menuName){
    return {
        type:type.SWITCH_MENU_THEME,
        menuName
    }
}