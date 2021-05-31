import * as React from 'react';
import {StyleSheet, Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { NavigationContainer, useBackButton } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {useState, useEffect} from 'react';

import firebase from "../database/firebaseDB";

const db = firebase.firestore();
const auth = firebase.auth();

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState ("");
  const [errorText, setErrorText] =useState ("");

function login() {
  Keyboard.dismiss();
  auth
  .signInWithEmailAndPassword (email, password)
  .then((userCredential) => {
    console.log("Signed in!");
 //   navigation.navigate("Chat", {email});
  })
  .catch((error)=> {
    console.log("Error!");
    setErrorText(error.message);
  })

}

  return (
    //<TouchableWithoutFeedback onPress ={Keyboard.dismiss}>
      <View style ={styles.container}>
        <Text style = {styles.title}>Chat App!</Text>
        <Text style = {styles.fieldTitle}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder ="Enter Email"
          value ={email}
          onChangeText={(text)=> setEmail(text)}
          />
        <Text style ={styles.fieldTitle}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          />
        <TouchableOpacity style ={styles.loginButton} onPress ={login}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <Text style={styles.errorText}>{errorText}</Text>
      </View>
    //</TouchableWithoutFeedback>
  )
  
  // return (
  //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //     <Text>Chat App</Text>
  //     <Text></Text>
  //     <Text>Enter Email</Text>
  //     <Text></Text>
  //     <Text>Enter Password Below</Text>
  //   </View>
  //);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 24,
  },
  fieldTitle: {
    fontSize: 18,
    marginBottom: 12,
  },
  input: {
    borderColor: "#999",
    borderWidth: 1,
    marginBottom: 24,
    padding: 4,
    height: 36,
    fontSize: 18,
    backgroundColor: "white",
  },
  loginButton: {
    backgroundColor: "blue",
    width: 120,
    alignItems: "center",
    padding: 18,
    marginTop: 12,
    marginBottom: 36,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  errorText: {
    color: "red",
    marginTop:20,
    marginLeft:20,
    marginRight:20,
    height: 40,
  },
});
