
/*
Вместо конструкции switch-case для взаимодействия с action.type можно использовать
объект в котором ключами будут action.type
 */

import { HIDE_ALERT, SHOW_ALERT } from "../types"

const handlers = {
    [SHOW_ALERT]: (state, {payload})=> ({...payload, visible: true}),
    [HIDE_ALERT]: (state)=> ({...state, visible: false}),
    DEFAULT: state=>state
}


export const alertReducer = (state, action) => {
    const handle=handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}