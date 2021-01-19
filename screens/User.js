import React, { useContext, useState } from 'react';
import { Text, Container, Content, Button, Toast } from "native-base"
import { View, TextInput } from "react-native"
import GeneralContext from "../context/GeneralContext"
import { useNavigation } from '@react-navigation/native'
const User = () => {
    const navigation = useNavigation();

    const { setCurrentUser } = useContext(GeneralContext);
    const [userName, setuserName] = useState("")
    const [message, setmessage] = useState(null)
    const Submit = () => {

        if (userName === "") {
            setmessage("Debe ingresar nombre de usuario")
            console.log("entra")
            return
        }
        setCurrentUser(userName)
        setuserName("")
        navigation.navigate('ListHour');
    }

    const showAlert = () => {
        Toast.show({
            text: message,
            buttonText: 'OK',
            duration: 5000
        })
        setmessage(null)
    }
    return (<>
        <Container>
            <Content>
                <View style={{ paddingTop: 50, alignItems: "center", justifyContent: "space-between" }}>
                    <Text style={{ fontWeight: "bold",textTransform:"uppercase" }}>Ingrese su nombre</Text>
                    <TextInput
                        onChangeText={(text) => { setuserName(text) }}
                        value={userName}
                        style={{ borderColor: 'gray', borderWidth: 2, height: 40, width: 200, marginTop: 10 }} />
                    <View>
                        <Button onPress={() => {
                            Submit()
                        }} style={{ marginTop: 10 }} ><Text>Ingresar</Text></Button>
                    </View>
                    {message && showAlert()}
                </View>
            </Content>
        </Container>
    </>);
}

export default User;