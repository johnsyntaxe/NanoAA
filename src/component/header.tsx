import React from "react";
import { StyleSheet, ImageBackground, View} from 'react-native';

//components
import SearchBar from "./searchBar";
import TopBar from "./topBar";

const HeaderComponent = () => {
  return(
    <ImageBackground source={ require ('../assets/maps.png')} resizeMode='cover'>
      <View style={Styles.containerHeader}>
        {/*Top bar */}
        <TopBar/>
        {/*Search bar */}
        <SearchBar/>
      </View>
    </ImageBackground>
  )
}

export default HeaderComponent;

 const Styles = StyleSheet.create({
  containerHeader: {
    width:"100%",
    paddingVertical:14,
    paddingHorizontal:15,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
})