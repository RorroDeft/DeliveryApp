import React, { useContext } from 'react';
import {  Container, Content, Footer, Text } from "native-base"
import GeneralContext from "../context/GeneralContext"
import Hours from "./Hours"
const ListHours = () => {
    const { countDelivery, dummy_data } = useContext(GeneralContext);

    return (

        
        <Container>
            <Content>
                {dummy_data.map((element) =>
                    <Hours
                        key={element.id}
                        element={element}
                    />
                )}

            </Content>
            <Footer>
                    <Text>Motoristas Disponibles:{countDelivery}</Text>
                </Footer>
        </Container>


    );
}

export default ListHours;