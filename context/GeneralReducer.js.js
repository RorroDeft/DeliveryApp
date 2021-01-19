import { SET_CURRENT_USER, SET_HOUR } from '../types';

export default (state, action) => {
    switch ((action.type)) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case SET_HOUR:
            let existe = state.dummy_data.find((item) => (item.userName.toUpperCase() === state.currentUser.toUpperCase()))
            if (!existe) {
                if (state.countDelivery >= 1) {
                    state.dummy_data[state.dummy_data.map(item => item.id === action.payload.id && item.avaible === true ?
                        [item.avaible = action.payload.var_avaible, item.userName = action.payload.user]
                        [state.countDelivery--]
                        : item)]

                }
            } else {
                state.dummy_data.map((element) => {
                    if (element.userName.toUpperCase() === state.currentUser.toUpperCase() && element.id === action.payload.id && element.avaible === false) {
                        state.dummy_data[state.dummy_data.map(item => item.id === action.payload.id ? [item.avaible = action.payload.var_avaible, item.userName = action.payload.user] : item)]
                        state.countDelivery++
                    }
                })
            }
            return {
                ...state,
                dummy_data: [...state.dummy_data],
            }

        default:
            return state;
    }
}