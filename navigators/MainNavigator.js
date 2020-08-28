import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AppNavigator from './AppNavigator'
import AuthNavigator from './AuthNavigator'

const Tab = createBottomTabNavigator();
export default function MainNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Auth"
                backBehavior="none"
                screenOptions={({ route }) => ({
                    tabBarVisible: false,
                    unmountOnBlur: true
                })}
            >
                <Tab.Screen name="Auth" component={AuthNavigator} />
                <Tab.Screen name="App" component={AppNavigator} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}