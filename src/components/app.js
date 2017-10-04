import React, { Component } from 'react';

import SplashScreen from "react-native-splash-screen";
//import MyDrawerNavigator from './route';
import MyStackNavigator from "./route";
import MyDrawerNavigator from "./route";
import {connect} from 'react-redux';



class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      
        <MyStackNavigator />
    
    );
  }
}


export default connect()(App);