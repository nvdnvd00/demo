
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import MyDrawerNavigator from './route';

export default class app extends Component {
  componentDidMount() {
    	// do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }
  render() {
    return (
      <MyDrawerNavigator/>
    );
  }
}
 