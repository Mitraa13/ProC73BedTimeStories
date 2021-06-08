import * as React from 'react';
import { Text, View, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import {Header} from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreen from './screens/homeScreen';
import ReadStoryScreen from './screens/readStoryScreen';
import WriteStoryScreen from './screens/writeStoryScreen';

export default class App extends React.Component{
  render(){
    return (
      <SafeAreaProvider style={styles.container}>

        <Header
        backgroundColor={"#000000" }
        centerComponent={{text:"Story Hub", style:{color:"white", fontSize:24,}}} 
        />    

        <AppContainer />
        
      </SafeAreaProvider>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  HomeScreen : {screen:HomeScreen, 
    navigationOptions:{tabBarIcon:({tintColor})=>(
      <Image 
      source={require('./assets/home.png')}
      resizeMode='contain'
      style={{width:30, height:30}} />
    )}},
  WriteStory : {screen:WriteStoryScreen, 
    navigationOptions:{tabBarIcon:({tintColor})=>(
      <Image 
      source={require('./assets/write.png')}
      resizeMode='contain'
      style={{width:30, height:30}} />
    )}},
  ReadStory : {screen:ReadStoryScreen, 
    navigationOptions:{tabBarIcon:({tintColor})=>(
      <Image 
      source={require('./assets/read.png')}
      resizeMode='contain'
      style={{width:30, height:30}} />
    )}},
})

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
