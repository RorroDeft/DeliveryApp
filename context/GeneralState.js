import React, { useReducer } from 'react';
import GeneralContext from './GeneralContext';
import generalReducer from './GeneralReducer.js';
import moment from 'moment';
import { SET_CURRENT_USER, SET_HOUR } from "../types/index"

const GeneralState = props => {

    const initialHour = moment('2015-02-17 07:30:00')
    const arrayHour = []
    let i = 1
    while (initialHour.hours() !== 20) {

        initialHour.add(30, "minutes")
        const hour = (initialHour.format("HH:mm"))
        arrayHour.push({ id: i.toString(), hour, avaible: true, userName: "" })
        i++
    }

    const initialState = {
        //Data que debería venir de una API
        dummy_data: [
            ...arrayHour
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
