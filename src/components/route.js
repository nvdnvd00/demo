import React, { Component } from 'react';
import { 
  StackNavigator,
  DrawerNavigator,
  DrawerItems
} from 'react-navigation';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button
} from 'react-native';
import Home from './HomeScreen';
import Login from './LoginScreen';


const MyDrawerNavigator = DrawerNavigator({
  LoginScreen: 
  {
    screen: Login
  },
  HomeScreen: 
  { 
    screen: Home 
  }
},  
  {
    drawerWidth: 200,
    drawerPosition: 'left',
    contentComponent: props => <CustomDrawerContentComponent {...props} />
  
});

export default MyDrawerNavigator;

//Custom drawerslidemenu
const CustomDrawerContentComponent = (props) => (
  <View style={{ flex:1, backgroundColor: 'green'}}>
    <Button onPress={ () => props.navigation.navigate('HomeScreen')}
      title= 'Click'
      />     
  </View>
);



