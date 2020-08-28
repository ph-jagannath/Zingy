import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '.././screens/Auth/Login'
import Signup from '.././screens/Auth/Signup'
import VerifyNumber from './../screens/Auth/VerifyNumber'
import WelcomeDacwash from '../screens/Auth/WelcomeDacwash'
import AddVehicle from '../screens/Auth/AddVehicle'
const Stack = createStackNavigator();

export default function AuthNavigator() {
    return (
        <Stack.Navigator
            headerMode="none"
            initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="VerifyNumber" component={VerifyNumber} />
            <Stack.Screen name="WelcomeDacwash" component={WelcomeDacwash} />
            <Stack.Screen name="AddVehicle" component={AddVehicle} />
        </Stack.Navigator>
    )
}