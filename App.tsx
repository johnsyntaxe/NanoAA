import React from 'react';
import {StatusBar, View, StyleSheet } from 'react-native';
import Home from './src/screens/ux/home';

const App = () => {

  return (
    <View style={Styles.container}>
      <StatusBar
        hidden={true} /> 
      <Home/>
    </View>
  );
};


export default App;

export const Styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"blue"
  }
})

