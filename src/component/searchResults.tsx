import React from "react";
import {Text, View, StyleSheet, FlatList} from 'react-native';

//component
import Card from "./card";
import FilterBar from "./filter";

//redux
import {useSelector} from 'react-redux';

//local storage
import localStorage from '../services/localStrorage';

const SearchResult = () => {
  const {saveData} = useSelector((state) => state);
  //localStorage.get('data_user').then((response)=>{};
  
  return(
    <View style={Styles.container}>
      {/* filter bar */}
        <FilterBar/>
      {/* list Results */}
      <View>
        <FlatList
          data={saveData.data}
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
              poster_path={item.poster_path}
              city={item.city}
              vote_average={item.vote_average}
              overview={item.overview}
              commentaire={item.commentaire}
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