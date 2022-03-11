import React from 'react';
import {StatusBar, View, StyleSheet } from 'react-native';

//screens
import Home from './src/screens/ux/home';

//redux
import {Provider} from 'react-redux';
import Store from './src/store'

const App = () => {

  return (
    <Provider store={Store}>
      <View style={Styles.container}>
        <StatusBar
          hidden={true} /> 
        <Home/>
      </View>
    </Provider>
  );
};


export default App;

export const Styles = StyleSheet.create({
  container:{
    flex:1,
    width:"100%",
    height:"100%",
    backgroundColor:"#fff"
  }
})