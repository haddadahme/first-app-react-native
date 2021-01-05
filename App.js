import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {TextInput, Button, StyleSheet, Text, View } from 'react-native';
import{ Image } from 'react-native';
import { Component } from 'react';
import { render } from 'react-dom';

  

export default function  App() {

  return (
    <View style={styles.container}>
      <Text style={{color:'red',fontSize:20}}>welcom in my!</Text>
      <TextInput placeholder="write your name" />
      <Button title="valider" onPress={()=>{
        alert("welcom");
        
      }}></Button> 
      {/*<Image source={{uri:'https://scontent.fnbe1-1.fna.fbcdn.net/v/t1.0-9/43392940_1072193529612461_6347098409421242368_n.jpg?_nc_cat=102&ccb=2&_nc_sid=a4a2d7&_nc_ohc=WXtIgBHv46oAX-t23XT&_nc_ht=scontent.fnbe1-1.fna&oh=4363bbf463315f21a8dbef7c697ea9c1&oe=5FDE0A5B'}}style={{width:300, height:300}}/>*/}
      {/*<TextInput ref='username' placeholder="Enter your name" autoCapitalize='none' style={{
        height:40, borderColor:'gray',borderWidth:1
      }*/}
      
      <StatusBar style="auto" />
    </View>
  );} 



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#0055'
  
  },
  v2:{
    flex:2,
    backgroundColor:'green',
    alignItems: 'center',
    justifyContent: 'center',




  },
});
