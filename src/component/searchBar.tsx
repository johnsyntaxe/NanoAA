import React, {useState} from "react";
import {Text, TextInput, View, StyleSheet, TouchableOpacity, ToastAndroid, Alert} from "react-native";

import NetInfo from '@react-native-community/netinfo';

//redux
import {useDispatch} from 'react-redux';

//services
import { _search, _goBack } from "../services/search";

//icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//action
import {saveData} from '../actions/saveData';

//local storage
import localStorage from '../services/localStrorage';

//type
import {datas} from '../types/action'



const SearchBar = () => {
  interface response {
    results?:{}
  }
  const [search, setSearch] = useState<string>('');
  const dispatch = useDispatch();

  const _fecthData = async () =>{
    let arrayData:datas[]=[]
    let response = await _search(search);
    console.log('-----------------------------------------------------------',response[0]);

    for (let cpt = 0; cpt < 10; cpt++) {
      arrayData=[...arrayData, ...[
        {
          id:response[cpt].id,
          vote_average: response[cpt].vote_average,
          commentaire:8,
          city:'Title',
          location:'Ville, pays',
          overview:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt pariatur labore voluptatem natus amet repellat ad minima architecto quaerat? Eius fugiat blanditiis at quam optio aut obcaecati non reiciendis incidunt!',
          poster_path:'https://reactnative.dev/img/tiny_logo.png'
        }
      ]]
    }
    dispatch(saveData(arrayData));
    //localStorage.set('dataApi', 'arrayData');
  }
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
    <TouchableOpacity onPress={() => _fecthData()} style={Styles.searchBarLeft}>
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
