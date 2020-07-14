/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './Screens/LoginPage'
import Dashboard from './Screens/Dashboard'

const App=()=>
{

  const Stack=createStackNavigator();

  return(

    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Loginpage" component={LoginPage} ></Stack.Screen>
        <Stack.Screen name="Dashboard" component={Dashboard} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )



}

export default App