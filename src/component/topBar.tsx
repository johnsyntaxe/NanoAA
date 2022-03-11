import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TopBar = () => {
  const _shop = () =>{
    console.log('click on shop icon');
  };
  const _menu = () =>{
    console.log('click on mennu icon');
  };
  return(
    <View style={Styles.topBarContainer}>
      <View style={Styles.titleContent}>
        <Text style={Styles.titleStyle}>NanooAA</Text>
      </View>
      <View style={Styles.topBarContentIcon}>
        <TouchableOpacity onPress={() => _shop()} style={[Styles.topBarIconStyle, {marginRight:10}]}>
          <MaterialIcons name="shop" size={25} color="#e7af5f" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => _menu()} style={Styles.topBarIconStyle}>
          <MaterialIcons name="menu" size={25} color="#e7af5f" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TopBar;

const Styles = StyleSheet.create({

  // Top bar
  topBarContainer:{
    display:"flex",
    marginBottom:30,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  titleContent:{
    width: "60%",
  },
  titleStyle:{
    color: "#fff",
    fontSize:22,
    fontWeight:"700"
  },
  topBarContentIcon:{
    display:"flex",
    flexDirection:"row",
    justifyContent:'space-between',
  },
  topBarIconStyle:{
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 19,
    backgroundColor:'#fff'
  }
})