import React, { useReducer } from 'react';
import GeneralContext from './GeneralContext';
import generalReducer from './GeneralReducer.js';

import { SET_CURRENT_USER, SET_HOUR } from "../types/index"

const GeneralState = props => {
    const initialState = {
        //Data que debería venir de una API
        dummy_data: [
            { id: "1", hour: "8:00", avaible: true, userName: "" },
            { id: "2", hour: "8:30", avaible: true, userName: "" },
            { id: "25", hour: "9:00", avaible: true, userName: "" },
            { id: "3", hour: "9:30", avaible: true, userName: "" },
            { id: "4", hour: "10:00", avaible: true, userName: "" },
            { id: "5", hour: "10:30", avaible: true, userName: "" },
            { id: "6", hour: "11:00", avaible: true, userName: "" },
            { id: "7", hour: "11:30", avaible: true, userName: "" },
            { id: "8", hour: "12:00", avaible: true, userName: "" },
            { id: "9", hour: "12:30", avaible: true, userName: "" },
            { id: "10", hour: "13:00", avaible: true, userName: "" },
            { id: "11", hour: "13:30", avaible: true, userName: "" },
            { id: "12", hour: "14:00", avaible: true, userName: "" },
            { id: "13", hour: "14:30", avaible: true, userName: "" },
            { id: "14", hour: "15:00", avaible: true, userName: "" },
            { id: "15", hour: "15:30", avaible: true, userName: "" },
            { id: "16", hour: "16:00", avaible: true, userName: "" },
            { id: "17", hour: "16:30", avaible: true, userName: "" },
            { id: "18", hour: "17:00", avaible: true, userName: "" },
            { id: "19", hour: "17:30", avaible: true, userName: "" },
            { id: "20", hour: "18:00", avaible: true, userName: "" },
            { id: "21", hour: "18:30", avaible: true, userName: "" },
            { id: "22", hour: "19:00", avaible: true, userName: "" },
            { id: "23", hour: "19:30", avaible: true, userName: "" },
            { id: "24", hour: "20:00", avaible: true, userName: "" }
        ],
        currentUser: null,
        countDelivery: 8
    }

    const [state, dispatch] = useReducer(generalReducer, initialState);
    //arrow function para setear usuario actual.
    const setCurrentUser = (current_user) => {
        dispatch({
            type: SET_CURRENT_USER,
            payload: current_user
        });
    }

    const setHour = (data) => {
        dispatch({
            type: SET_HOUR,
            payload: data
        });
    }


    return (
        <GeneralContext.Provider
            value={{
                //States y Funciones para ser utilizadas desde cualquier componente
                dummy_data: state.dummy_data,
                currentUser: state.currentUser,
                setCurrentUser,
                setHour,
                countDelivery: state.countDelivery,
            }}
        >
            {props.children}
        </GeneralContext.Provider>
    )
}

export default GeneralState;
