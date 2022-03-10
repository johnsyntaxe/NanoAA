import React, {useState} from "react";
import { _search, _goBack } from "../services/search";
import {Text, TextInput, View, StyleSheet, TouchableOpacity} from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SearchBar = () => {
  const [search, setSearch] = useState<string>('');

  return(
    <View style={Styles.searchBarContainer}>
    <View style={Styles.searchBarLeft}>
      <TouchableOpacity onPress={() => _goBack()}  style={{paddingRight: 11}}>
        <MaterialIcons name="keyboard-backspace" size={25} color="#000" />
      </TouchableOpacity>
      <View>
        <Text style={Styles.searchBarLabel}>Place</Text>
      </View>
    </View>
    <View style={Styles.textInputContent}>
      <TextInput
        placeholder={'Paris, France'}
        style={Styles.textInput}
        onChangeText={(text) => setSearch(text)}
        value={search} 
      />
    </View>
    <TouchableOpacity onPress={() => _search(search)} style={Styles.searchBarLeft}>
      <MaterialIcons name="search" size={25} color="#000" />
    </TouchableOpacity>
  </View>
  )
}
export default SearchBar;

const Styles = StyleSheet.create({

  // search bar
  searchBarContainer:{
    display:"flex",
    borderRadius: 9,
    flexDirection:"row",
    paddingHorizontal:8,
    borderColor: '#000',
    backgroundColor:"white",
    justifyContent:'space-between',
  },
  searchBarLabel :{
    color:"#403688",
    fontWeight:"700"
  },
  textInputContent:{
    width:"50%",
  },
  textInput:{
    height: 38,
    borderColor: '#ec1c24',
  },
  searchBarLeft:{
    display:"flex",
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"center",

  }
})