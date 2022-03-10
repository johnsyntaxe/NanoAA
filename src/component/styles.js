import {Dimensions} from 'react-native';

const Dev_Height = Dimensions.get('window').height;
const Dev_Width = Dimensions.get('window').width;

export default {
  /** ---------------------------Header--------------------------------- */
  containerHeader: {
    backgroundColor:"#ec1c24",
    paddingVertical:12,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    width:"100%"
  },
  topBarContainer:{
    display:"flex",
    //flexDirection:"row",
    //justifyContent:"space-between"
  },
  titleContent:{
    backgroundColor: "purple",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    width: "60%",
  },
  titleStyle:{
    fontSize:18,
  },
  topBarContentIcon:{
    paddingVertical:10,
    display:"flex",
    flexDirection:"row",
    justifyContent:'space-between',
    backgroundColor:'yellow',
  },
  topBarIconStyle:{
    padding: 5,
    borderRadius: 10,
    backgroundColor:'green'
  },
  Search_Box_View: {
    // height: '20%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Search_Box: {
    height: 20,
    width: '100%',
    borderColor: '#ec1c24',
    borderWidth: 1,
    borderRadius: 5,
    color: '#FFF',
    padding: 10,
  },
};
