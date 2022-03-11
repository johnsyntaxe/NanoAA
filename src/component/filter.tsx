import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const FilterBar = () => {
  const _shop = () =>{
    console.log('click on shop icon');
  };
  const _menu = () =>{
    console.log('click on mennu icon');
  };
  return(
    <View style={Styles.filterBarContentIcon}>
    <TouchableOpacity onPress={() => _shop()} style={Styles.filterIconStyle}>
      <MaterialIcons name="menu" size={25} color="#fff" />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => _menu()} style={Styles.filterBarIconStyle}>
      <MaterialIcons style={Styles.styleIcon} name="filter" size={25} color="#000" />
      <Text style={Styles.textIcon}>Sort by</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => _menu()} style={Styles.filterBarIconStyle}>
      <MaterialIcons style={Styles.styleIcon} name="search" size={25} color="#000" />
      <Text style={Styles.textIcon}>Rating</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => _menu()} style={Styles.filterBarIconStyle}>
      <MaterialIcons style={Styles.styleIcon} name="search" size={25} color="#000" />
      <Text style={Styles.textIcon}>Verified</Text>
    </TouchableOpacity>
  </View>
  )
}
export default FilterBar

const Styles = StyleSheet.create({
    // TopBar
    filterBarContainer:{
      display:"flex",
      marginBottom:30,
      flexDirection:"row-reverse",
      justifyContent:"space-between"
    },
    titleContent:{
      width: "60%",
    },
    filterBarContentIcon:{
      display:"flex",
      flexDirection:"row",
      justifyContent:'space-between',
    },
    filterBarIconStyle:{
      display:"flex",
      padding:6,
      paddingHorizontal: 10,
      flexDirection:"row",
      borderRadius: 18,
      borderWidth:1,
      borderColor:"#9d9d9d",
    },
    filterIconStyle:{
      padding:6,
      display:"flex",
      flexDirection:"row",
      borderRadius: 100,
      backgroundColor:"#f0ad4e"
    },
    styleIcon:{
      marginRight:8,
    },
    textIcon :{
      color: "#000",
      fontWeight:"500"
    },
})