import React from "react";
import {Text, View, Image, StyleSheet, ViewProps} from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Props extends ViewProps {
	image?: string,
	city?: string,
  note?:number,
  description: string,
  comment:number,
  location: string
}

const Card:React.FC<Props> = ({image, city,  note, description, comment, location}) =>{

  return(
    <View style={Styles.containerFlatlist}>
    {/* Header */}
    <View style={Styles.headerFlatList}>
      <View style={{borderRadius:50, backgroundColor:"white", borderWidth:1, overflow:"hidden", }}>
        <Image
          style={Styles.imageStyle}
          resizeMode="cover"
          source={{
            uri: `${image}`,
          }}
        />
      </View>
      <View>
        <Text style={Styles.city}>{city}</Text>
          <View style={Styles.contentNotes}>
            <MaterialIcons name="star" size={20} color="#f0ad4e" />
            <MaterialIcons name="star" size={20} color="#f0ad4e" />
            <MaterialIcons name="star" size={20} color="#f0ad4e" />
            <MaterialIcons name="star" size={20} color="#f0ad4e" />
            <MaterialIcons name="star" size={20} color="#f0ad4e" />
          </View>
      </View>
    </View>
    {/* Body */}
    <View style={Styles.descriptionContent}>
      <Text style={Styles.descriptionText}>{description}</Text>
    </View>
    {/* footer */}
    <View style={Styles.footerList}>
      <View style={Styles.commentContent}>
        <MaterialIcons name="chat" size={20} color="#f0ad4e" />
        <Text style={Styles.commentText}>{comment} </Text>
      </View>
      <View style={Styles.location}>
        <Text style={Styles.locationText}>{location} </Text>
        <MaterialIcons name="map" size={20} color="#44328d" />
      </View>
    </View>
  </View>
  )
}
export default Card

const Styles = StyleSheet.create({
  
  //Flatlist

  imageStyle: {
    width: 60,
    height:60
  },
  containerFlatlist:{
    padding:5,
    borderWidth:1,
    borderRadius:10,
  },
  headerFlatList:{
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-between"
  },
  contentNotes:{
    display:"flex",
    flexDirection:"row",
  },
  city:{
    color:"#000",
    fontSize:20,
    fontWeight:"700",
  },

  descriptionContent:{
    marginVertical:12,
    backgroundColor:"yellow",
    textAlign:"justify"
  },
  descriptionText:{
    color:"#000",
    fontSize:18,
    fontWeight:"400"
  },
  footerList:{
    display: "flex",
    marginBottom:8,
    flexDirection: "row",
    paddingHorizontal:12,
    justifyContent:"space-between",

  },
  commentContent:{
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-between",
  },
  commentText:{
    fontSize:15,
    color:"#f0ad4e",
    marginLeft:5,
    fontWeight:"500",
  },
  locaitonContent:{
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-between",
  },
  location:{
    display: "flex",
    flexDirection:"row",
  },
  locationText:{
    fontSize:15,
    color:"#44328d",
    marginRight: 10,
    fontWeight:"500",
  },
})