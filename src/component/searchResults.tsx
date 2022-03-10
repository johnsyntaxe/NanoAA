import React from "react";
import {Text, View, StyleSheet, FlatList, ScrollView} from 'react-native';
import Card from "./card";
import FilterBar from "./filter";

const SearchResult = () => {
  const fakeData = [
    {
      id:1,
      aword:6,
      commentaires: 2,
      city:"jonathan",
      location: "Yaounde, Cameroun",
      description:"Yaounde est une vlle du cameroun",
      image:"https://reactnative.dev/img/tiny_logo.png"
    },
    {
      id:1,
      aword:6,
      commentaires: 2,
      city:"jonathan",
      location: "Yaounde, Cameroun",
      description:"Yaounde est une vlle du cameroun",
      image:"https://reactnative.dev/img/tiny_logo.png"
    },
    {
      id:1,
      aword:6,
      commentaires: 2,
      city:"jonathan",
      location: "Yaounde, Cameroun",
      description:"Yaounde est une vlle du cameroun",
      image:"https://reactnative.dev/img/tiny_logo.png"
    },
  ]

    
  return(
    <View style={Styles.container}>
      {/* filter bar */}
        <FilterBar/>
      {/* list Results */}
      <View>
        <FlatList
          data={fakeData}
          keyExtractor={(item, index) => `key-${index}`}
          ListHeaderComponent={() => (
            <View style={Styles.listResultsTitle}>
              <Text style={Styles.titleStyle}>Searchs results</Text>
              <Text style={Styles.subTitleStyle}>Accountant on the current location</Text>
            </View>
          )}
          ItemSeparatorComponent={() => (
            <View style={{height:20}}/>
          )}
          renderItem={({ item }) => (
            <Card 
              image={item.image}
              city={item.city}
              note={item.aword}
              description={item.description}
              comment={item.commentaires}
              location={item.location} 
            />
          )}
        />
      </View>
    </View>
  )
}

export default SearchResult;

const Styles = StyleSheet.create({
   container:{
    width:"100%",
    marginTop:50,
    paddingHorizontal:15,
    backgroundColor:"#fff",
   },

  // List result
  listResultsTitle:{
    marginTop:36,
    marginBottom:18
  },
  titleStyle:{
    color: "#000",
    fontSize:29,
    fontWeight:"700"
  },
  subTitleStyle:{
    color:"#9d9d9d"
  },
})