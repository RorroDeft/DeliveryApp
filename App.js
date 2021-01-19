import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Root } from 'native-base'
const Stack = createStackNavigator();
import User from "./screens/User"
import ListHour from "./screens/ListHour"
import GeneralState from "./context/GeneralState"


const App = () => {
  return (<>
    <Root>
      <GeneralState>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="User" >
            <Stack.Screen
              name="User"
              component={User}
              options={{
                title: "Formulario Usuario",
                headerShown: false
              }}
            />

            <Stack.Screen
              name="ListHour"
              component={ListHour}
              options={{
                title: "Seleccione hora de entrega",
                headerStyle: {
                  backgroundColor: '#28303B'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GeneralState>
    </Root>
  </>);
}

export default App;