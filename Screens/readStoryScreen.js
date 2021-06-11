import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
import firebase from 'firebase';
import db from '../config'

export default class ReadStoryScreen extends React.Component {
 
    constructor(props){
      super(props)
  
      this.state = {
          allStories:[],
  
      }
  }

  componentDidMount (){
    this.listStories()
  }
  
  listStories = ()=>{
    try{
    var allStories = [];
    var stories = 
    db.collection("Story")
    .get()
    .then((querySnapShot) => {
      querySnapShot.forEach((doc)=>{
        allStories.push(doc.data())
        console.log(allStories)
      })
      this.setState({
        allStories
      })
    })
    }
    catch(error){
      console.log("error")
    }
  }

  render() {
      return (
        <View style={styles.container}>
          <View style={styles.searchBar}>


        <TextInput 
          style ={styles.bar}
          placeholder = "Enter Story Title"/>


          <TouchableOpacity
            style = {styles.searchButton}
          ><Text>Search</Text>
          </TouchableOpacity>
          </View>
          
          <FlatList
          data ={this.state.allStories}
          renderItem={({item})=>(
              <View style = {{borderWidth:3, marginTop:20}}>
                  <Text>{"Title:" +  ' '+item.title}</Text>
                  <Text>{"Author:"+ ' '+item.author}</Text>
              </View>
          )}
          keyExtractor = {(items,index)=>{index.toString()}}
          />

          
          </View>
    );
  }
}
const styles = StyleSheet.create({
      container: {
        flex: 1,
        marginTop: 20,
        backgroundColor:"#FF7878",
        padding:20,
      },
      searchBar:{
        flexDirection:'row',
        height:50,
        width:250,
        borderWidth:1.5,
        alignItems:'center',
        backgroundColor:'white',
        alignSelf:"center",
        padding:20
    
      },
      bar:{
        borderWidth:2,
        height:40,
        width:'auto',
        paddingLeft:10,
      },
      searchButton:{
        borderWidth:1,
        height:30,
        width:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'orange'
      }
});
