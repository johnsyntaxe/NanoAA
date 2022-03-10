import React from "react";
import {Text, View, StyleSheet} from 'react-native'

const TopBar = () => {
  return(
    <View style={Styles.topBarContainer}>
      <View style={Styles.titleContent}>
        <Text style={Styles.titleContent.titleStyle}>NanooAA</Text>
      </View>
      <View style={Styles.topBarContentIcon}>
        <View style={[Styles.topBarContentIcon.topBarIconStyle, {marginRight:10}]}>
          <Text>icon1</Text>
        </View>
        <View style={Styles.topBarContentIcon.topBarIconStyle}>
          <Text>icon2</Text>
        </View>
      </View>
    </View>
  )
}

export default TopBar;

const Styles = StyleSheet.create({

  // Top bar
  topBarContainer:{
    display:"flex",
    marginBottom:18,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  titleContent:{
    backgroundColor: "purple",
    width: "60%",
    titleStyle:{
      fontSize:22,
    },
  },
  topBarContentIcon:{
    display:"flex",
    flexDirection:"row",
    backgroundColor:'yellow',
    justifyContent:'space-between',
    topBarIconStyle:{
      padding: 5,
      borderRadius: 10,
      backgroundColor:'green'
    }
  },
})