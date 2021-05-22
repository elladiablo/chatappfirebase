import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useState, useEffect} from 'react';

import LoginScreen from "./screens/LoginScreen";
import ChatScreen from "./screens/ChatScreen";
import ContactsScreen from "./screens/ContactsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Contacts" component={ContactsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
