
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import MyDrawerNavigator from './route';

export default class app extends Component {
<<<<<<< HEAD
  componentDidMount() 
  {
    SplashScreen.hide();
  }
=======
  componentDidMount() {
    
        SplashScreen.hide();
    }
>>>>>>> 79dcba005c722f417f870911aeaf3b8938b0868e
  render() {
    return (
      <MyDrawerNavigator/>
    );
  }
}
 
