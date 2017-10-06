import React, { Component } from 'react';

//import SplashScreen from "react-native-splash-screen";
//import MyDrawerNavigator from './route';
import MyStackNavigator from "./route";
import MyDrawerNavigator from "./route";
import {connect} from 'react-redux';
import SplashScreen from "react-native-smart-splash-screen";



class App extends Component {
  componentDidMount() {
   // SplashScreen.hide();
   SplashScreen.close({
     animationType: SplashScreen.animationType.scale,
     duration: 850,
     delay: 500
   });
  }

  render() {
    return (
      
        <MyStackNavigator />
    
    );
  }
}


export default connect()(App);