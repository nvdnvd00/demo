import React, { Component } from "react";
import { StackNavigator, DrawerNavigator, DrawerItems } from "react-navigation";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button
} from "react-native";
import CONFIG from "./config";
import {
  LoginButton,
  AccessToken,
  GraphRequestManager,
  GraphRequest
} from "react-native-fbsdk";

import Home from "./HomeScreen";
import CustomDrawerContentComponent from './sidebar/customDrawerContentComponent';
import {connect} from 'react-redux';
const MyStackNavigator = StackNavigator(
  {
    HomeScreen: {
      screen: Home
    }
  },
  {
    headerMode: "none"
  }
);

const MyDrawerNavigator = DrawerNavigator(
  {
    Stack: {
      screen: MyStackNavigator
    },
    HomeScreen: {
      screen: Home
    }
  },
  {
    drawerWidth: 200,
    drawerPosition: "left",
    contentComponent: props => <CustomDrawerContentComponent {...props} />
  }
);
export default connect()(MyDrawerNavigator);