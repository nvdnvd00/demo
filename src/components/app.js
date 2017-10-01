
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
//import MyDrawerNavigator from './route';
import MyStackNavigator from './route';

export default class app extends Component {

  componentDidMount() {
    
        SplashScreen.hide();
    }

  render() {
    return (
      <MyStackNavigator/>
    );
  }
}
 
