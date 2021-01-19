import React, { useContext } from 'react';
import { Text, List, ListItem } from "native-base"
import GeneralContext from "../context/GeneralContext"

const Hours = ({ element }) => {

    //destructuring de las horas
    const { hour, id, avaible, userName } = element

    //states y funciones de api context
    const { setHour, currentUser, countDelivery } = useContext(GeneralContext);

    let color

    //Pinta la lista dependiendo del usuario
    if (!avaible) {
        if (userName.toUpperCase() === currentUser.toUpperCase()) {
            color = { backgroundColor: "green" }
        } else {
            color = { backgroundColor: "red" }
        }
    }
    //Validación para pintar si no quedan motoristas 
    if (countDelivery === 0) {
        if (userName.toUpperCase() === currentUser.toUpperCase()) {
            color = { backgroundColor: "green" }
        } else {
            color = { backgroundColor: "red" }
        }
    }

    return (

        <List>
            <ListItem
                style={!avaible || countDelivery === 0 ? color : {}}
                onPress={() => {
                    let var_avaible
                    let user

                    if (avaible) {
                        var_avaible = !avaible
                        user = currentUser
                    } else {
                        var_avaible = !avaible
                        user = ""
                    }
                    
                    //Funcion en context para actualizar la hora
                    setHour({
                        id, user, var_avaible
                    })

                }
                }
            >
                <Text>{hour}</Text>
            </ListItem>
        </List>

    );
}

export default Hours;