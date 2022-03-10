import React from "react";
import {View, StyleSheet} from 'react-native';
import SearchBar from "./searchBar";
import TopBar from "./topBar";
// import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderComponent = () => {
  return(
    <View style={Styles.containerHeader}>
      {/*Top bar */}
      <TopBar/>
      {/*Search bar */}
      <SearchBar/>
    </View>
  )
}

export default HeaderComponent;

 const Styles = StyleSheet.create({
  containerHeader: {
    width:"100%",
    paddingVertical:14,
    paddingHorizontal:15,
    backgroundColor:"#ec1c24",
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
})