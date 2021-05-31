import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useState, useEffect} from 'react';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import firebase from "../database/firebaseDB";
import {GiftedChat} from "react-native-gifted-chat";

const db = firebase.firestore().collection("messages");

export default function ChatScreen ({navigation}) {
  const [messages, setMessages] = useState([]);
  
  //handle log in and out and set up the db

  useEffect(()=> {
  
  const unsubscribe =db
    .orderBy("createdAt", "desc")
    .onSnapshot((collectionSnapshot)=>{
      const serverMessages = collectionSnapshot.docs.map((doc)=> {
        const data = doc.data();
        console.log(data);

        const jsDate = new Date(data.createdAt.seconds*1000);

        const newDoc = {
          ...data,
          createdAt: jsDate,
        };
        
        return newDoc;     
      });
      
      setMessages(serverMessages);
    });
  
   
    firebase.auth().onAuthStateChanged((user)=>{
      if (user) {
        //logged in
        navigation.navigate("Chat", {id:user.id, email:user.email});
      } else {
        //logged out, get kicked back to Login page
        navigation.navigate("Login");
      }
    });

navigation.setOptions({
  headerRight:() => (
    <TouchableOpacity onPress ={logout}>
      <MaterialCommunityIcons
      name ="logout"
      size ={24}
      color="grey"
      style ={{marginRight:20}}
      />
    </TouchableOpacity>
    ),
  });
  
    return unsubscribe;

}, []);

function logout() {
  firebase.auth().signOut();
}

function onSend(messages){
  //let's see what's inside
  console.log(messages);
  //the message order is reversed for some reason
 db.add(messages[0]);
}

if (firebase.auth().currentUser) {
  return (
    <GiftedChat
    messages = {messages}
    onSend={(messages)=> onSend(messages)}
    user={{
      _id:firebase.auth().currentUser.uid,
      name:firebase.auth().currentUser.email,
    }}

    />
  );

} else {
  return null;
} 

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#ffc",
    alignItems:"center",
    justifyContent:"center",
  },
});

}