import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../screeens/SignUp/index'
import SignIn from '../screeens/SignIn/index'

const Stack = createNativeStackNavigator();

const Routes = () => {
    return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signup" options={{headerShown:false}} component={SignUp} />
        <Stack.Screen name="SignIn" options={{headerShown:false}} component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Routes