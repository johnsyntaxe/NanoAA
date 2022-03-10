import React, {useState} from "react";
import {Text, TextInput, View, StyleSheet, TouchableOpacity} from "react-native";

const SearchBar = () => {
  const [search, setSearch] = useState<string>('');

  //function search
  const _search = () =>{
    console.log('La valeur entree', search);
  };
  //function go back
  const _goBack = () =>{
    console.log('<--------- Back');
  };

  return(
    <View style={Styles.searchBarContainer}>
    <View style={Styles.searchBarLeft}>
     <TouchableOpacity onPress={() => _goBack()}  style={{paddingRight: 10}}>
       <Text>icon</Text>
     </TouchableOpacity>
     <View>
      <Text>Place</Text>
     </View>
    </View>
    <View style={{backgroundColor:"red", width:"40%"}}>
    <TextInput
      placeholder={'France'}
      style={Styles.textInput}
      onChangeText={(text) => setSearch(text)}
      value={search} 
    />
    </View>
    <TouchableOpacity onPress={() => _search()} style={Styles.searchBarLeft}>
      <Text>icon maps</Text>
    </TouchableOpacity>
  </View>
  )
}
export default SearchBar;

const Styles = StyleSheet.create({

  // search bar
  searchBarContainer:{
    display:"flex",
    borderWidth: 1,
    borderRadius: 9,
    flexDirection:"row",
    paddingHorizontal:8,
    borderColor: '#000',
    backgroundColor:"white",
    justifyContent:'space-between',
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