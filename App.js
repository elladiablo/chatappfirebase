import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useState, useEffect} from 'react';

import LoginScreen from "./screens/LoginScreen";
import ChatScreen from "./screens/ChatScreen";
import ContactsScreen from "./screens/ContactsScreen";
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
      <Stack.Screen component={ChatScreen} name="Chat"/>
      <Stack.Screen
        component={LoginScreen}
        name="Login"
        options={{ headerShown:false}}
        />

      </Stack.Navigator>

      </NavigationContainer>
  );
}
