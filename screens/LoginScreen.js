import * as React from 'react';
import {StyleSheet, Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useState, useEffect} from 'react';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState ("");

  return (
    <TouchableWithoutFeedback onPress ={Keyboard.dismiss}>
      <View style ={Style.container}>
        <Text style = {StyleSheet.title}>Chat App!</Text>
        <Text style = {StyleSheet,fieldTitle}>Email</Text>
        <TextInput
          style={StyleSheet.input}
          placeholder ="Enter Email"
          value ={email}
          onChangeText={(text)=> setEmail(text)}
          />
        <Text style ={Style.fieldTitle}>Password</Text>
        <TextInput
          style={StyleSheet.input}
          placeholder="Enter Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          />
        <TouchableOpacity style ={Style.loginButton} onPress ={null}>
          <Text style={Style.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  
  
  // return (
  //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //     <Text>Chat App</Text>
  //     <Text></Text>
  //     <Text>Enter Email</Text>
  //     <Text></Text>
  //     <Text>Enter Password Below</Text>
  //   </View>
  );
}